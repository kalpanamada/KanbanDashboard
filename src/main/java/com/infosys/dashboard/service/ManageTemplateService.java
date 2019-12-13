package com.infosys.dashboard.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.bson.Document;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.infosys.dashboard.db.MongoDBConnection;
import com.infosys.dashboard.exception.FileUploadException;
import com.infosys.dashboard.util.ApplicatioConstants;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.UpdateOptions;

@RestController
@CrossOrigin
@RequestMapping("/manageTemplate")
public class ManageTemplateService {
	
	@RequestMapping(value = "/getTemplateList", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Set<String> getTemplateList() {
		Set<String> templateList = new HashSet<>();
		MongoDatabase db = MongoDBConnection.getDBConnection();
		MongoCollection<Document> collection = db.getCollection(ApplicatioConstants.REFERENCE_TEMPLATE_COLL);
		Document doc = collection.find().first();
		templateList.add(doc.getString("templateName"));
		MongoCollection<Document> mappingColl = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.MAPPING_COLUMN_COLL);
		MongoCursor<Document> cursor = mappingColl.find().iterator();
		
	
		while (cursor.hasNext()) {
			Document document = cursor.next();
			templateList.add(document.getString("templateName"));
		}		
		return templateList;
	}
	
	@RequestMapping(value = "/getReferenceTempColumns", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Document> getReferenceTempColumns() {		
		MongoDatabase db = MongoDBConnection.getDBConnection();
		MongoCollection<Document> collection = db.getCollection(ApplicatioConstants.REFERENCE_TEMPLATE_COLL);
		Document projection = new Document();
		projection.append("_id", 0).append("templateName", 0);
		MongoCursor<Document> cursor = collection.find().projection(projection).iterator();
		List<Document> columns = new ArrayList<>();
		while (cursor.hasNext()) {
			Document document = cursor.next();
			columns.add(document);
		}
		columns.add(new Document("columnName","Other1").append("description", "placeHolder1"));
		columns.add(new Document("columnName","Other2").append("description", "placeHolder2"));
		columns.add(new Document("columnName","Other3").append("description", "placeHolder3"));
		columns.add(new Document("columnName","Other4").append("description", "placeHolder4"));
		return columns;
		
	}
	
	
	@CrossOrigin(origins = { "*" }, 
			methods={RequestMethod.POST, RequestMethod.OPTIONS},
			allowedHeaders={"Origin", "X-Requested-With", "Content-Type", "Accept"})
	@RequestMapping(value = "/readTempHeader", method = { RequestMethod.POST, RequestMethod.OPTIONS },consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = "application/json")	
	@ResponseBody
	public List<Document> readTempHeader(@RequestParam("uploadedFile") MultipartFile uploadedFile) {

		if (uploadedFile == null || uploadedFile.isEmpty()) {
			throw new FileUploadException("Null or empty file to upload");
		}

		File convFile = new File(uploadedFile.getOriginalFilename());
		try {
			convFile.createNewFile();
			FileOutputStream fos = new FileOutputStream(convFile);
			fos.write(uploadedFile.getBytes());
			fos.close();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		InputStream input;
		List<Object> headerList = new ArrayList<>();
		List<Document> jsonHeader = new ArrayList<>();
		try {
			System.out.println("TempFilePath ............" + convFile.getAbsolutePath());
			input = new FileInputStream(convFile);
			XSSFWorkbook workbook = new XSSFWorkbook(input);

			XSSFSheet sheet = workbook.getSheetAt(0);
			// XSSFSheet sheet = workbook.getSheet("AQI Look Up");
			Iterator<Row> rowIterator = sheet.iterator();
		
			GenericService genericObj = new GenericService();
			while (rowIterator.hasNext()) {
				XSSFRow row = (XSSFRow) rowIterator.next();
				boolean isEmpty = genericObj.isRowEmpty(row);
				if (!isEmpty) {
					headerList = genericObj.headerReader(row, headerList);	
					for(Object obj : headerList){
						jsonHeader.add(new Document("headerName",obj.toString()));
					}
					System.out.println("Header Values " + headerList);
				}
                break;
			}
			   convFile.delete();
			  

		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
		return jsonHeader;
	}
	
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/mappingFields",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
    public String mappingFields(@RequestBody Document mappingJson){
		String message="";
		String templateName = (String) mappingJson.get("templateName");
		Set<String> templateList = getTemplateList();
		if(templateList.contains(templateName)){
			message= "templateName already available";
		}else{			
			MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.MAPPING_COLUMN_COLL);
			List<Map> columns = (List<Map>) mappingJson.get("mappingColumns");
			for(Map columnMap : columns){
				Document doc = new Document().append("referenceColumn", columnMap.get("referenceColumn")).append("mappingColumn", columnMap.get("mappingColumn"));
				doc.append("templateName", templateName);
			    coll.insertOne(doc);
			}
			
			message= "done";
		}
		return message;
		
		
	}
}
	


