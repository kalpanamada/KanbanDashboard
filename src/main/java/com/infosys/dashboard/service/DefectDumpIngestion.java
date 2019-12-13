package com.infosys.dashboard.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.infosys.dashboard.db.MongoDBConnection;
import com.infosys.dashboard.exception.FileUploadException;
import com.infosys.dashboard.model.Defect;
import com.infosys.dashboard.model.User;
import com.infosys.dashboard.util.ApplicatioConstants;
import com.infosys.dashboard.util.PropertiesReader;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;


@RestController
@RequestMapping("/dumpIngestion")
public class DefectDumpIngestion {
	
	private static List<String> propHeaderList = null;
	private static List<String> mappingColumns = new ArrayList<>();
	private static Map<String,String> mappingFields = new HashMap<>();
	DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	
	

	/*public static void main(String[] args) {

		DefectDumpIngestion dumpIngestion = new DefectDumpIngestion();
		File file = new File("C:\\Users\\km619v\\jars\\old jars1\\defectDump.xlsx");
		//dumpIngestion.read(file);

	}
	*/
	

	
	public static void getPropHeaderList(){
		propHeaderList = Arrays.asList( PropertiesReader.load().getProperty("excelHeaderValues").split(","));
		
	}
	
	public static Map<String,String> getTemplateMappingFields(String templateName){
		
		Document findQuery = new Document("templateName",templateName);
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection= null;
		if(ApplicatioConstants.REFERENCE_TEMPLATE.equalsIgnoreCase(templateName)){
		 collection = db.getCollection(ApplicatioConstants.REFERENCE_TEMPLATE_COLL);
		}else{
		 collection = db.getCollection(ApplicatioConstants.MAPPING_COLUMN_COLL);
		}
		
		MongoCursor<Document> cursor = collection.find(findQuery).iterator();
		while(cursor.hasNext()){
			Document doc = cursor.next();
			if(ApplicatioConstants.REFERENCE_TEMPLATE.equalsIgnoreCase(templateName)){
			   mappingFields.put(doc.getString("columnName"), doc.getString("columnName"));
			   mappingColumns.add(doc.getString("columnName"));
			}else{
				  mappingFields.put(doc.getString("mappingColumn"), doc.getString("referenceColumn"));
				  mappingColumns.add(doc.getString("mappingColumn"));
			}
		}
		return mappingFields;
		   
	}
	
/*	public void create(){
		File file = new File("C:\\Users\\km619v\\jars\\old jars1\\defectDump.xlsx");		
		File convFile = new File(file.getName());		
		    convFile.createNewFile(); 
		    FileOutputStream fos = new FileOutputStream(convFile); 
		    fos.write(file.getBytes());
		    fos.close(); 
	}
	
	*/
	/*@RequestMapping(value="/ingest" ,method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody*/
    

	@CrossOrigin(origins = { "*" }, 
			methods={RequestMethod.POST, RequestMethod.OPTIONS},
			allowedHeaders={"Origin", "X-Requested-With", "Content-Type", "Accept"})
	@RequestMapping(value = "/ingest", method = { RequestMethod.POST, RequestMethod.OPTIONS },consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = "application/json")	
	@ResponseBody
	public String ingest(@RequestParam("uploadedFile") MultipartFile uploadedFile,@RequestParam("templateName")  String templateName) {	
		System.out.println("template choosen-----"+templateName);
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
		  
		
		
		getPropHeaderList();
		getTemplateMappingFields(templateName);
		System.out.println("propHeaderList"+propHeaderList);
		InputStream input;
		int headerCount = 0;
		int previousCell;
		int currentCell;
		try {
			System.out.println("TempFilePath ............"+convFile.getAbsolutePath());
			input = new FileInputStream(convFile);
			XSSFWorkbook workbook = new XSSFWorkbook(input);			
			XSSFSheet sheet = workbook.getSheetAt(0);
			//XSSFSheet sheet = workbook.getSheet("AQI Look Up");
			Iterator<Row> rowIterator = sheet.iterator();
			List<Object> headerList = new ArrayList<>();
			List<Document> seedData = new ArrayList<>();
			
			GenericService genericObj = new GenericService();
			while (rowIterator.hasNext()) {
				XSSFRow row = (XSSFRow) rowIterator.next();
				boolean isEmpty = genericObj.isRowEmpty(row);
				if (!isEmpty) {
					if (headerCount > 0) {
						previousCell = -1;
						currentCell = 0;
						Document document = processCell(row, headerList, currentCell, previousCell);	
						if(!ApplicatioConstants.REFERENCE_TEMPLATE.equalsIgnoreCase(templateName)){
							Document modifyDoc = new Document();
							modifyDoc = mapFields(document,modifyDoc);
							seedData.add(modifyDoc);	
							
						}else{
							seedData.add(document);	
						}
							
						
										
					} else {
						headerList = genericObj.headerReader(row, headerList);
						System.out.println("Header Values " + headerList);
					}

					headerCount++;
				}

			}
			 System.out.println("final List "+ seedData.size());			
			 MongoDatabase db =  MongoDBConnection.getDBConnection();
				MongoCollection<Document> collection = db.getCollection("Dummy");
				collection.deleteMany(new Document());
				collection.insertMany(seedData);
                convFile.delete();
			 
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "Done";

	}
	
	private Document mapFields(Document saveDoc,Document modifyDoc){
		Set<String> keys =saveDoc.keySet();
		
		for (String field : keys){
			if(field.equalsIgnoreCase("DefectId")){
				modifyDoc.put(field,saveDoc.get(field));
			}else{
				modifyDoc.put(mappingFields.get(field),saveDoc.get(field));	
					
			}
		}
		
		return modifyDoc;
		
		
	}

	public Document processCell(XSSFRow row, List<Object> headerList, int currentCellloc,
			int previousCellloc) {
		int currentCell = currentCellloc;
		int previousCell = previousCellloc;

		Document document = new Document();
		XSSFCell cell = null;
		Iterator<Cell> cellIterator = row.cellIterator();
		int i = 0;
		while (cellIterator.hasNext()) {
			cell = (XSSFCell) cellIterator.next();
			currentCell = cell.getColumnIndex();
			for (; i < headerList.size();) {
				if (previousCell == currentCell - 1) {
					addDocument(currentCell, cell, headerList, document);
				} else {
					i++;
					addDocument(currentCell, cell, headerList, document);
				}
				previousCell = currentCell;
				i++;
				break;
			}
		}

		return document;

	}

	private void addDocument(int i, XSSFCell cell, List<Object> headerList,Document document) {


		if (cell != null) {

			String headerName = headerList.get(i).toString().trim();
			System.out.println(headerName);
			if(mappingColumns.contains(headerName)) {
			if (cell.getCellType() == XSSFCell.CELL_TYPE_BOOLEAN) {
				headerList.add(cell.getBooleanCellValue());
				document.put(headerName, cell.getBooleanCellValue());
			} else if (cell.getCellType() == XSSFCell.CELL_TYPE_STRING) {				
					document.put(headerName, cell.getStringCellValue());				
				
			} else if (cell.getCellType() == XSSFCell.CELL_TYPE_NUMERIC) {
			 if("Creation Date".equalsIgnoreCase(headerName) || "Modified Date".equalsIgnoreCase(headerName) || headerName.endsWith("Date") || headerName.endsWith("date")) {
				//LocalDateTime  modifiedDate = LocalDateTime.parse(String.valueOf(cell.getNumericCellValue()),dateFormat);
				document.put(headerName,cell.getDateCellValue());				
			}else if("id".equalsIgnoreCase(headerName) || "id".equalsIgnoreCase(mappingFields.get(headerName))){				
				document.put("DefectId", (int)cell.getNumericCellValue());
			}else if("DPMO".equalsIgnoreCase(headerName)){
				document.put(headerName, (int)cell.getNumericCellValue());
			}else {
				document.put(headerName, cell.getNumericCellValue());
			}
				
			} else if (cell.getCellType() == XSSFCell.CELL_TYPE_ERROR) {
				document.put(headerName, cell.getErrorCellValue());
			}
			}

		}

	}

}
