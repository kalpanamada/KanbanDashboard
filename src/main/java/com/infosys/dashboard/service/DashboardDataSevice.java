package com.infosys.dashboard.service;



import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.bson.Document;
import org.bson.json.JsonMode;
import org.bson.json.JsonWriterSettings;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.infosys.dashboard.db.MongoDBConnection;
import com.infosys.dashboard.model.Actual;
import com.infosys.dashboard.model.BucketMappinRepo;
import com.infosys.dashboard.model.BucketMappingData;
import com.infosys.dashboard.model.CustomDefect;
import com.infosys.dashboard.model.Plan;
import com.infosys.dashboard.util.ApplicatioConstants;
import com.infosys.dashboard.util.LoadDBConstants;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.model.Updates;


@RestController
@CrossOrigin
@RequestMapping("/dashBoard")
public class DashboardDataSevice {
	

	public static void main(String[] args) {
		DashboardDataSevice dDObj = new DashboardDataSevice();
		//dDObj.getDefectIdList(); 
		//dDObj.insertBucketMappingDate();
		//dDObj.updateBucketMappingColl();
		//
		dDObj.insertReleaseDump();			

	}
	
	
	@RequestMapping(value="/getDefectIdList" ,method=RequestMethod.GET ,produces = "application/json")	
    @ResponseBody
	public Map<Integer,CustomDefect> getDefectIdList() {
		
		Document findQuery = new Document();
		/*Document orQuery = new Document();
		orQuery.append("Defect Type", "Issue");*/
		ObjectMapper objectMapper = new ObjectMapper();
		ArrayList<String> statusList = new ArrayList<>();
		statusList.add("Closed");
		statusList.add("Cancelled");
		statusList.add("Deferred");
		ArrayList<Document> andQuery = new ArrayList<>();
		andQuery.add(new Document("Status", new Document("$nin",statusList)));
		andQuery.add(new Document("Defect Type",new Document("$ne","Tracking Record")));
		andQuery.add(new Document("Program",new Document("$eq","Long Distance")));
		findQuery.append("$and", andQuery);
		/*Document projection = new Document();
		projection.append("DefectId", 1);*/
		JsonWriterSettings writerSettings = new JsonWriterSettings(JsonMode.SHELL, true);           
		System.out.println(findQuery.toJson(writerSettings));
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("defectDumpColl");
		//MongoCursor<Document> cursor = coll.find(findQuery).projection(projection).iterator();
		MongoCursor<Document> cursor = coll.find(findQuery).iterator();
		Map<Integer,CustomDefect> defectMap= new HashMap<>();
		CustomDefect defectObj=null;
		try {
            while (cursor.hasNext()) {
            	Document document = cursor.next();
            	defectObj = objectMapper.convertValue(document, CustomDefect.class);
            	defectMap.put(defectObj.getDefectId(),defectObj);
               // System.out.println("DefectId    " +doc.get("DefectId"));
                
           
        }
    } finally {
        cursor.close();
    }
		return defectMap;
		
	}
	
	@RequestMapping(value="/getBucketMappingData" ,method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public BucketMappingData getBucketMappingData(@RequestBody String date){
		
		Map<Integer,CustomDefect> defectMap = getDefectIdList();
		Set<Integer> defectIdKey = defectMap.keySet();
		System.out.println("Passing parameter ...."+date);	
		Document findQuery = new Document("date",date);
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.BUCKET_MAPPING_COLL);		
		ObjectMapper objectMapper = new ObjectMapper();
		BucketMappingData bucketMapping=null;
		MongoCursor<Document> cursor = coll.find(findQuery).sort(new Document("version",-1)).limit(1).iterator();
		Actual actualObj=null;		
		try{
			while(cursor.hasNext()){
				Document document = cursor.next();
				coll.updateOne(new Document("_id", document.getObjectId("_id")),
						Updates.set("freeze", Boolean.FALSE));
				 bucketMapping = objectMapper.convertValue(document, BucketMappingData.class);
				 
				List<Actual> actualDefectList = bucketMapping.getActual();
				List<Integer> existingDefects = new ArrayList<>();
				if(actualDefectList!=null && actualDefectList.size()>0){
					for(Actual actualItem :actualDefectList ){
						existingDefects.add(actualItem.getDefectId());																
					}
				}
				
				for(Integer defectId :defectIdKey){
					if(!(existingDefects.contains(defectId))){
						actualObj= new Actual();
						CustomDefect defect = defectMap.get(defectId);
						actualObj.setDefectId(defect.getDefectId());
						actualObj.setDescription(defect.getSummary());
						actualObj.setSeverity(defect.getSeverity());
						actualObj.setModule(defect.getApplicationFoundInSubTeam());
						actualObj.setComplexity("");
						actualObj.setEta(null);
						actualObj.setStatus("");
						actualObj.setProgress("");
						actualObj.setWorkedBy("");
						actualObj.setDefectType(defect.getDefectType()!=null ? LoadDBConstants.loadDefectTypes().get(defect.getDefectType()):"");
						actualDefectList.add(actualObj);
					}
					}
				bucketMapping.setActual(actualDefectList);
				}
						
		}finally{
			cursor.close();
		}
	   //insertBucketMappingDate();
		return bucketMapping;
		
	}
	
	@RequestMapping(value="/getBucketMappingPlanData" ,method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public BucketMappingData getBucketMappingPlanData(@RequestBody String date){

		System.out.println("Passing parameter ...."+date);	
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		Map<Integer,CustomDefect> defectMap = getDefectIdList();
		Set<Integer> defectIdKey = defectMap.keySet();
		
		Document findQuery = new Document("date",date);
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.BUCKET_MAPPING_COLL);
		long todayCount =coll.count(findQuery);
		ObjectMapper objectMapper = new ObjectMapper();
		BucketMappingData bucketMapping=new BucketMappingData();
		List<Plan> planDefectList = new ArrayList<>();
		List<Integer> existingDefects = new ArrayList<>();
		Plan planObj=null;
		//if data is not available for today
		if(todayCount<=0){
			 final Calendar cal = Calendar.getInstance();
			    cal.add(Calendar.DATE, -1);
			    date =   df.format(cal.getTime());
			    Document findyestQuery = new Document("date",date);
			    long yestCount =coll.count(findyestQuery);
			    if(yestCount>0){
			    	MongoCursor<Document> cursor = coll.find(findyestQuery).sort(new Document("version",-1)).limit(1).iterator();
			    	try{
						while(cursor.hasNext()){
							Document document = cursor.next();
							 bucketMapping = objectMapper.convertValue(document, BucketMappingData.class);
							 List<Actual> actualDefectList = bucketMapping.getActual();
								if(actualDefectList!=null && actualDefectList.size()>0){
									for(Actual actualItem :actualDefectList ){
										existingDefects.add(actualItem.getDefectId());
										Plan actualToPlanObj =new Plan();
										BeanUtils.copyProperties(actualItem, actualToPlanObj);
										 MongoCollection<Document> defectDumpColl = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.DEFECT_DUMP_COLL);
										 Document doc = defectDumpColl.find(new Document("DefectId",actualToPlanObj.getDefectId())).first();
										 if("Cancelled".equalsIgnoreCase(doc.getString("Status")) || "Closed".equalsIgnoreCase(doc.getString("Status"))){
										      
										 }else{
											 planDefectList.add(actualToPlanObj);
										 }
									}
								}							 
						}
			    	}finally{
						cursor.close();
					}
			    	
			    }
		}else{			
			MongoCursor<Document> cursor = coll.find(findQuery).sort(new Document("version",-1)).limit(1).iterator();
			try{
				while(cursor.hasNext()){
					Document document = cursor.next();
					 bucketMapping = objectMapper.convertValue(document, BucketMappingData.class);
					 planDefectList = bucketMapping.getPlan();
					 for(Plan plan : planDefectList){
						 MongoCollection<Document> defectDumpColl = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.DEFECT_DUMP_COLL);
						 Document doc = defectDumpColl.find(new Document("DefectId",plan.getDefectId())).first();
						 if("Cancelled".equalsIgnoreCase(doc.getString("Status")) || "Closed".equalsIgnoreCase(doc.getString("Status"))){							 
							 planDefectList.remove(plan);
						 }else{
							 existingDefects.add(plan.getDefectId());
						 }
						
					 }
					
				}
	    	}finally{
				cursor.close();
			}
			
		}
		
		for(Integer defectId :defectIdKey){
			if(!(existingDefects.contains(defectId))){
				planObj= new Plan();
				CustomDefect defect = defectMap.get(defectId);
				planObj.setDefectId(defect.getDefectId());
				planObj.setDescription(defect.getSummary());
				planObj.setSeverity(defect.getSeverity());
				planObj.setModule(defect.getApplicationFoundInSubTeam());
				planObj.setComplexity("");
				planObj.setEta(null);
				planObj.setStatus("");
				planObj.setProgress("");
				planObj.setWorkedBy("");
				planObj.setDefectType(defect.getDefectType()!=null ? LoadDBConstants.loadDefectTypes().get(defect.getDefectType()):"");
			    planDefectList.add(planObj);
			}
			}
		bucketMapping.setPlan(planDefectList);	
		return bucketMapping;
		
	}
	
	
	@RequestMapping(value="/insertPlanMapping" ,method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public String insertPlanMapping(@RequestBody BucketMappingData bucketMappingData ) {			
		Document findQuery = new Document("date",bucketMappingData.getDate());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("BucketMappingColl");
		long count =coll.count(findQuery);
		bucketMappingData.setVersion((int) (count+1));
		Gson gson = new Gson();
		String json = gson.toJson(bucketMappingData);		
		Document saveDoc =Document.parse(json);
		coll.insertOne(saveDoc);
		return "sucess";
		
	//long result =	coll.updateOne(findQuery, new Document("$set",saveDoc), new UpdateOptions().upsert(true)).getModifiedCount();

	
	}

	@RequestMapping(value="/updateActualMapping" ,method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void updateActualMapping(@RequestBody BucketMappingData bucketMappingData) {
		Document findQuery = new Document().append("date", bucketMappingData.getDate()).append("version",
				bucketMappingData.getVersion());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("BucketMappingColl");
		Gson gson = new Gson();
		coll.updateOne(findQuery,
				Updates.pull("actual", new Document("defectId", bucketMappingData.getActual().get(0).getDefectId())));

		String json = gson.toJson(bucketMappingData.getActual().get(0));
		Document saveDoc = Document.parse(json);
		long result = coll.updateOne(findQuery, Updates.push("actual", saveDoc)).getMatchedCount();
		System.out.println("Number of records Matched " + result);

	}
	
	
	public void insertBucketMappingDate() {		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");		
		int[] array ={345218,345209,345188,342848,342515,342499};
		Document saveDoc = new Document();
		String date = df.format(new Date());
		saveDoc.append("SelectedDate", df.format(new Date()));
		BucketMappingData bucketMappingData = new BucketMappingData();
		bucketMappingData.setDate(date);
		List<Plan> planList = new ArrayList<>();
		List<Actual> actualList = new ArrayList<>();
		
		for(int i :array){
			Plan plan = new Plan();
			plan.setDefectId(i);
			plan.setModule("");
			plan.setComplexity("");
			plan.setProgress("");
			plan.setStatus("");
			plan.setEta(null);
			plan.setModifiedDate(null);
			plan.setDefectType("Production Defect");
			plan.setWorkedBy("");
			
			planList.add(plan);
			Actual actual = new Actual();
			actual.setDefectId(i);	
			actual.setModule("");
			actual.setComplexity("");
			actual.setProgress("");
			actual.setStatus("");
			actual.setEta(null);
			actual.setModifiedDate(null);
			actual.setWorkedBy("");
			actual.setDefectType("Production Defect");
			actualList.add(actual);;
		}
		
		bucketMappingData.setPlan(planList);
		bucketMappingData.setActual(actualList);
		Gson gson = new Gson();
	    String json = gson.toJson(bucketMappingData);		
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("BucketMappingColl");
		coll.insertOne(Document.parse(json));
		
	}
	
	
	
	public void insertReleaseDump() {
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		Document documet = new Document();
		
		try {
			documet.append("Date", df.parse("11-24-2017"))
			.append("Type", "RH1").append("Release", "1710");
			MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.RELEASES_COLL);
			coll.insertOne(documet);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
