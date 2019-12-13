package com.infosys.dashboard.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.infosys.dashboard.db.MongoDBConnection;
import com.infosys.dashboard.model.Module;
import com.infosys.dashboard.model.Releases;
import com.infosys.dashboard.model.User;
import com.infosys.dashboard.util.ApplicatioConstants;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.UpdateOptions;

@RestController
@CrossOrigin
@RequestMapping("/manageCollection")
public class ManageCollectionService {

	@RequestMapping(value = "/addUser", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public void addUser(@RequestBody User userObj) {
		System.out.println("Add User" + userObj.getAttid());
	}

	@RequestMapping(value = "/getUsersList", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<User> getUsersList() {
		MongoDatabase db = MongoDBConnection.getDBConnection();
		MongoCollection<Document> collection = db.getCollection(ApplicatioConstants.USER_MAPPING_COLL);
		MongoCursor<Document> cursor = collection.find().iterator();
		List<User> usersList = new ArrayList<User>();
		User user = null;
		ObjectMapper objectMapper = new ObjectMapper();
		while (cursor.hasNext()) {
			user = objectMapper.convertValue(cursor.next(), User.class);
			usersList.add(user);
		}
		return usersList;

	}

	@RequestMapping(value = "/getModuleList", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Module> getModuleList() {
		MongoDatabase db = MongoDBConnection.getDBConnection();
		MongoCollection<Document> collection = db.getCollection(ApplicatioConstants.MODULE_COLL);
		MongoCursor<Document> cursor = collection.find().iterator();
		List<Module> moduleList = new ArrayList<Module>();
		Module module = null;
		ObjectMapper objectMapper = new ObjectMapper();
		while (cursor.hasNext()) {
			module = objectMapper.convertValue(cursor.next(), Module.class);
			moduleList.add(module);
		}
		return moduleList;

	}

	@RequestMapping(value = "/getReleaseList", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Releases> getReleaseList() {
		MongoDatabase db = MongoDBConnection.getDBConnection();
		MongoCollection<Document> collection = db.getCollection(ApplicatioConstants.USER_MAPPING_COLL);
		MongoCursor<Document> cursor = collection.find().iterator();
		List<Releases> releasesList = new ArrayList<Releases>();
		Releases releases = null;
		ObjectMapper objectMapper = new ObjectMapper();
		while (cursor.hasNext()) {
			releases = objectMapper.convertValue(cursor.next(), Releases.class);
			releasesList.add(releases);
		}
		return releasesList;
	}

	@RequestMapping(value="/editUser",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void editUser(@RequestBody User user){
		Gson gson = new Gson();		
		String json = gson.toJson(user);
		Document saveDoc = Document.parse(json);	
		Document findQuery = new Document().append("attid", user.getAttid());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.USER_MAPPING_COLL);
		long result = coll.replaceOne(findQuery,saveDoc,new UpdateOptions().upsert(true)).getModifiedCount();
		System.out.println("******Updated Successfully***********"+result);
	}
	
	
	@RequestMapping(value="/editModule",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void editModule(@RequestBody Module module){
		Gson gson = new Gson();		
		String json = gson.toJson(module);
		Document saveDoc = Document.parse(json);	
		Document findQuery = new Document().append("module", module.getModule());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.MODULE_COLL);
		long result = coll.replaceOne(findQuery,saveDoc,new UpdateOptions().upsert(true)).getModifiedCount();
		System.out.println("******Updated Successfully***********"+result);
	}

	
	@RequestMapping(value="/editRelease",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void editRelease(@RequestBody Document releases){
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		/*Gson gson = new Gson();		
		String json = gson.toJson(releases);
		Document saveDoc = Document.parse(json);*/
		String dateVal = (String) releases.get("date");
		try {
			releases.put("date", df.parse(dateVal));
			Document findQuery = new Document().append("date", df.parse(dateVal));
			
			MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.RELEASES_COLL);
			long result = coll.replaceOne(findQuery,releases,new UpdateOptions().upsert(true)).getModifiedCount();
			System.out.println("******Updated Successfully***********"+result);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	@RequestMapping(value="/deleteRelease",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void deleteRelease(@RequestBody Releases releases){			
		Document findQuery = new Document().append("date", releases.getDate());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.RELEASES_COLL);
		coll.deleteOne(findQuery);		
		System.out.println("******deleted Successfully***********");
	}
	
	@RequestMapping(value="/deleteUser",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void deleteUser(@RequestBody User user){
		
		Document findQuery = new Document().append("attid", user.getAttid());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.USER_MAPPING_COLL);
		coll.deleteOne(findQuery);		
		System.out.println("******deleted Successfully***********");
	}
	
	
	@RequestMapping(value="/deleteModule",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void deleteModule(@RequestBody Module module){			
		Document findQuery = new Document().append("module", module.getModule());
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.MODULE_COLL);
		coll.deleteOne(findQuery);		
		System.out.println("******deleted Successfully***********");
	}

	
	
	
	/*
	 * private Document convertClassToDocument(){ Gson gson = new Gson(); String
	 * json = gson.toJson(user); Document saveDoc = Document.parse(json);
	 * 
	 * }
	 */
	
	@RequestMapping(value="/insertRules",method=RequestMethod.POST ,produces = "application/json")	
    @ResponseBody
	public void insertRules(@RequestBody Document rules){
		MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection(ApplicatioConstants.RELEASES_COLL);
		coll.insertOne(rules);
		
	}

}
