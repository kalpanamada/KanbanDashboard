package com.infosys.dashboard.service;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.infosys.dashboard.db.MongoDBConnection;
import com.infosys.dashboard.model.Actual;
import com.infosys.dashboard.model.BucketMappingData;
import com.infosys.dashboard.model.CustomDefect;
import com.infosys.dashboard.model.QueryProperties;
import com.infosys.dashboard.util.ApplicatioConstants;
import com.mongodb.Block;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Aggregates;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.bson.Document;
import org.bson.json.JsonMode;
import org.bson.json.JsonWriterSettings;

@RestController
@CrossOrigin
@RequestMapping("/generic")
public class GenericService {
	
	
	
	
	@RequestMapping(value="/getUsersList" ,method=RequestMethod.GET ,produces = "application/json")	
    @ResponseBody	
	public List<Document> getUsersList(){
		
	MongoCollection<Document> userColl = MongoDBConnection.getDBConnection().getCollection("UserMapping");
	Document projection = new Document();
	projection.append("attid", 1).append("name", 1).append("_id", 0);
	MongoCursor<Document> cursor = userColl.find().projection(projection).iterator();
	List<Document> usersList = new ArrayList<>();
	try{
		while(cursor.hasNext()){
			Document userDoc= cursor.next();
			usersList.add(userDoc);
			
		}
	}finally{
		cursor.close();
	}
		return usersList;		
		
	}
	
	public boolean isRowEmpty(XSSFRow row) {

		for (int c = row.getFirstCellNum(); c <= row.getLastCellNum(); c++) {
			XSSFCell cell = row.getCell(c);
			if (cell != null && cell.getCellType() != XSSFCell.CELL_TYPE_BLANK) {
				return false;
			}
		}
		return true;
	}

	public List<Object> headerReader(XSSFRow row, List<Object> headerList) {
		XSSFCell cell = null;
		Iterator<Cell> cellIterator = row.cellIterator();
		while (cellIterator.hasNext()) {
			cell = (XSSFCell) cellIterator.next();
			if (cell != null) {
				if (cell.getCellType() == XSSFCell.CELL_TYPE_BOOLEAN) {
					headerList.add(cell.getBooleanCellValue());
				} else if (cell.getCellType() == XSSFCell.CELL_TYPE_STRING) {
					headerList.add(cell.getRichStringCellValue());
				} else if (cell.getCellType() == XSSFCell.CELL_TYPE_NUMERIC) {
					headerList.add(cell.getNumericCellValue());
				} else if (cell.getCellType() == XSSFCell.CELL_TYPE_ERROR) {
					headerList.add(cell.getErrorCellValue());
				}
			}
		}
		return headerList;
	}

	@RequestMapping(value="/getModuleList" ,method=RequestMethod.GET ,produces = "application/json")	
    @ResponseBody	
	public List<Document> getModuleList(){		
	MongoCollection<Document> moduleColl = MongoDBConnection.getDBConnection().getCollection("ModuleColl");
	Document projection = new Document();
	projection.append("module", 1).append("alias", 1).append("_id", 0);
	MongoCursor<Document> cursor = moduleColl.find().projection(projection).iterator();
	List<Document> moduleList = new ArrayList<>();
	try{
		while(cursor.hasNext()){
			Document moduleDoc= cursor.next();
			moduleList.add(moduleDoc);
			
		}
	}finally{
		cursor.close();
	}
		return moduleList;		
		
	}
	
	@RequestMapping(value="/getReleaseList" ,method=RequestMethod.GET ,produces = "application/json")	
    @ResponseBody	
	public List<Document> getReleaseList(){		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
	MongoCollection<Document> releaseColl = MongoDBConnection.getDBConnection().getCollection("ReleasesColl");
	Document projection = new Document();
	projection.append("_id", 0);
	MongoCursor<Document> cursor = releaseColl.find().projection(projection).iterator();
	List<Document> releaseList = new ArrayList<>();
	try{
		while(cursor.hasNext()){			
			Document releaseDoc= cursor.next();				
			Date date = releaseDoc.getDate("date");			
			releaseDoc.put("date",df.format(date));			
			releaseList.add(releaseDoc);
			
		}
	}finally{
		cursor.close();
	}
		return releaseList;		
		
	}
	
	
	@RequestMapping(value="/getAQI" ,method=RequestMethod.GET ,produces = "application/json")	
    @ResponseBody	
	public Document getAQI() {		
		Document findQuery = createAQIQuery();
		ArrayList<Document> orQuery = new ArrayList<>();
		ArrayList<String> defectTypeList = new ArrayList<>();
		defectTypeList.add("Production Defect");
		defectTypeList.add("Warranty Defect");		
		orQuery.add(new Document("Defect Type",  new Document("$in",defectTypeList)));
		ArrayList<String> statusList = new ArrayList<>();
		statusList.add("Closed");
		statusList.add("Cancelled");
		ArrayList<Document> andQuery = new ArrayList<>();
		andQuery.add(new Document("Status", new Document("$nin",statusList)));
		andQuery.add(new Document("Program", "Long Distance"));
		findQuery.append("$and", andQuery);
		findQuery.append("$or", orQuery);		
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("defectDumpColl");
		MongoCursor<Document> cursor = coll.find(findQuery).iterator();
		int severity3Count =0;
		int severity2Count =0;
		int severity1Count =0;
		List<Document> documentsList = new ArrayList<>();
		Document AQIDoc = new Document();
		
    try {
			
			while(cursor.hasNext()) {
				   Document doc = cursor.next();
				   documentsList.add(doc);
				  String severity=  doc.getString("Severity");
				   if(ApplicatioConstants.SEVERITY_1.equalsIgnoreCase(severity)) {
					   severity1Count++;
				   }else if(ApplicatioConstants.SEVERITY_2.equalsIgnoreCase(severity)) {
					   severity2Count++;
				   }else {
					   severity3Count++;
				   }
			}
			double AQIVal = calculateAQI(severity1Count,severity2Count,severity3Count);
			
			AQIDoc.put("AQI", AQIVal);
			AQIDoc.put("severity1", severity1Count);
			AQIDoc.put("severity2", severity2Count);
			AQIDoc.put("severity3", severity3Count);	
		} finally

		{
			cursor.close();
		}
	return AQIDoc;
		
	}

	private static double calculateAQI(int severity1Count,int severity2Count,int severity3Count) {
		int sum =((severity1Count*5)+(severity2Count*3)+severity3Count)*10;
		Document findQuery = new Document("DPMO",sum);
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.AQI_LOOKUP_COLL);
		MongoCursor<Document> cursor = coll.find(findQuery).iterator();
		double AQI = 0 ;
		try {
			while(cursor.hasNext()) {
				Document doc = cursor.next();
				AQI = new Double(doc.getDouble("AQI"));				
				System.out.println("AQI .............."+AQI);
			}
		}finally {
			cursor.close();
		}
		return AQI;		
		
	}
	

	@RequestMapping(value="/getClosedAndCancelledDefects" ,method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody		
	public long getClosedAndCancelledDefects(@RequestBody String str_days){
		
		Document findQuery = createClosedCancelledQuery(str_days);			
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("defectDumpColl");
		JsonWriterSettings writerSettings = new JsonWriterSettings(JsonMode.SHELL, true);           
		System.out.println(findQuery.toJson(writerSettings));
		long count = coll.count(findQuery);
		System.out.println("Number of closed/cancelled defects count :"+count);
		return count;
		
	}
	
	@RequestMapping(value="/getReleaseDefects" ,method=RequestMethod.GET ,produces = "application/json")	
    @ResponseBody	
	public Document getReleaseDefects(){
		
	Document response = new Document();
	
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		String date = df.format(new Date());
		Document findQuery = null;
		String eta=null;
		try {
			findQuery = new Document("date",new Document("$gt",df.parse(date)));
			JsonWriterSettings writerSettings = new JsonWriterSettings(JsonMode.SHELL, true);           
			System.out.println(findQuery.toJson(writerSettings));
			MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.RELEASES_COLL);
			MongoCursor<Document> cursor = coll.find(findQuery).sort(new Document("date",1)).limit(1).iterator();
			
			while(cursor.hasNext()){
				Document doc = cursor.next();
				eta = doc.getString("key");
			}	
			BucketMappingData bucketMapping = createReleaseCollQuery(eta);
			if(bucketMapping !=null){				
				if(bucketMapping.getActual()!=null){
					List<Actual> actualList = bucketMapping.getActual();
					List<Integer> defectIdList = new ArrayList<>();
					for(Actual actual :actualList){
						if(eta.equalsIgnoreCase(actual.getEta()))
						defectIdList.add(actual.getDefectId());
						
					}
					response.put("count", defectIdList.size());
			 }			
			
			}
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.put("date", eta);
		
		
		
		return response;	
		
	}
	
	@RequestMapping(value="/getDefectDetails",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public List<CustomDefect> getDefectDetails(@RequestBody QueryProperties queryDoc){
		
		ObjectMapper objectMapper = new ObjectMapper();
		Document findQuery= null;		
		
		if("AQI".equalsIgnoreCase(queryDoc.getQuery())){
		 findQuery = createAQIQuery();
		 findQuery.append("Severity", queryDoc.getValue());
			
		}else if("Closed".equalsIgnoreCase(queryDoc.getQuery())){
			 findQuery = createClosedCancelledQuery(queryDoc.getValue());		
		}else{
			BucketMappingData bucketMapping = createReleaseCollQuery(queryDoc.getValue());
			if(bucketMapping.getActual()!=null){
				List<Actual> actualList = bucketMapping.getActual();
				List<Integer> defectIdList = new ArrayList<>();
				for(Actual actual :actualList){
					if(queryDoc.getValue().equalsIgnoreCase(actual.getEta()))
					defectIdList.add(actual.getDefectId());
					
				}
				findQuery = new Document("DefectId",new Document("$in",defectIdList));
			}
		}
		
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("defectDumpColl");
		MongoCursor<Document> cursor = coll.find(findQuery).iterator();		
		List<CustomDefect> documentsList = new ArrayList<>();
		CustomDefect defectObj=null;
		
		try {

			while (cursor.hasNext()) {
				Document doc = cursor.next();
				defectObj = objectMapper.convertValue(doc, CustomDefect.class);
				documentsList.add(defectObj);
			}

		} finally

		{
			cursor.close();
		}
		return documentsList;
		
	}
	
	private static Document createAQIQuery(){	
		Document findQuery = new Document();
		ArrayList<Document> orQuery = new ArrayList<>();
		ArrayList<String> defectTypeList = new ArrayList<>();
		defectTypeList.add("Production Defect");
		defectTypeList.add("Warranty Defect");		
		orQuery.add(new Document("Defect Type",  new Document("$in",defectTypeList)));
		ArrayList<String> statusList = new ArrayList<>();
		statusList.add("Closed");
		statusList.add("Cancelled");
		ArrayList<Document> andQuery = new ArrayList<>();
		andQuery.add(new Document("Status", new Document("$nin",statusList)));
		andQuery.add(new Document("Program", "Long Distance"));
		findQuery.append("$and", andQuery);
		findQuery.append("$or", orQuery);	
		
		return findQuery;
	}
	
	private static Document createClosedCancelledQuery(String  str_days){	
		
		int days = 7;
		if(str_days!=null &&!str_days.isEmpty()){
			days = Integer.parseInt(str_days);
		}
		Document findQuery = new Document();	
		Date startDate = new Date();		
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(startDate);
		cal.add(Calendar.DATE,-days);
		Date endDate = cal.getTime();				
		
		ArrayList<String> statusList = new ArrayList<>();
		statusList.add("Closed");
		statusList.add("Cancelled");
		ArrayList<Document> andQuery = new ArrayList<>();
		andQuery.add(new Document("Status", new Document("$in",statusList)));
		findQuery.append("Modified Date",new Document("$gte", endDate).append("$lte",startDate));
		return findQuery.append("$and", andQuery);
		
	}
	
	private static BucketMappingData createReleaseCollQuery(String eta){
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		String currentDate = df.format(new Date());
		Document bucketFindQuery = new Document("date",currentDate);
		MongoCollection<Document> bucketColl = MongoDBConnection.getDBConnection().getCollection("BucketMappingColl");		
		long count =bucketColl.count(bucketFindQuery);		
		BucketMappingData bucketMapping = null;
		ObjectMapper objectMapper = new ObjectMapper();
		for(int i=1;count<=0;i++){
			 final Calendar cal = Calendar.getInstance();
			    cal.add(Calendar.DATE, -i);
			    currentDate =   df.format(cal.getTime());
			    Document query = new Document("date",currentDate);
			    count =bucketColl.count(query);
		}
				
	/*	Document newQuery= new Document()
				.append("actual", new Document("$elemMatch",new Document("eta",eta))).append("actual", new Document("eta",eta));
		JsonWriterSettings writerSettings = new JsonWriterSettings(JsonMode.SHELL, true);           
		System.out.println(newQuery.toJson(writerSettings));
		MongoCollection<Document> newbucketColl = MongoDBConnection.getDBConnection().getCollection("BucketMappingColl");	
		MongoCursor<Document> cursor= newbucketColl.aggregate(Arrays.asList(Aggregates.match(new Document("date",currentDate)),Aggregates.unwind("$actual"),
				Aggregates.match(new Document("actual.eta",eta)),Aggregates.sort(new Document("version",-1)),Aggregates.limit(1))).iterator();*/
		
		MongoCursor<Document> cursor = bucketColl.find(new Document("date",currentDate)).sort(new Document("version",-1)).limit(1).iterator();
		
		try{
			while(cursor.hasNext()){
				Document doc = cursor.next();
			 bucketMapping = objectMapper.convertValue(doc, BucketMappingData.class);	
				
			}
		}finally{
			cursor.close();
		}
		return bucketMapping;
		
	}
	
	

}


