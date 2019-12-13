package com.infosys.dashboard.db;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.Document;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class OKODBSetup {

	
	public static void main(String args[]) {
		//createCustomer();
		//createCustomerAttachments();
		createNotes();
		//createActivites();
		//createProjects();
		createUsers();
		createReminders();
	}
	
	public static void createCustomer() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Customer");
		 Document customerDoc = new Document();
		 List<String> tagList = new ArrayList<String>();
		 tagList.add("California");
		 tagList.add("Finance");
		 customerDoc.append("clientId", 10933).append("firstname", "Bill").append("lastname", "Gates")
		 .append("email", "bill@microsoft.com").append("phone", "+1 425-200-3040").append("company", "Infosys")
		 .append("dob", "01-JAN-1968").append("gender", "Male").append("address", "22 Westside Ct, San Ramon, CA")
		 .append("image", "https://images4-b.ravelrycache.com/uploads/WoolhelminaToo/61240344/baby_tux_original_medium2.png")
		 .append("tags", tagList).append("status", "Pending");
		 collection.insertOne(customerDoc);
		 
		 
		
		 
	}
	

	public static void createCustomerAttachments() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Attachments");
		 List<Document> attachDocList = new ArrayList<Document>();
		
		 List<String> tagList = new ArrayList<String>();
		 tagList.add("2018 Tax");
		 tagList.add("Finance");
		 Document attachDoc = new Document();
		 attachDoc.append("attachmentId", 399823).append("clientId", 10933).append("title", "w2 - 2018")
		 .append("description", "Tax Document").append("url", "28.9.9.2/10933/w2.zip").append("extension", "zip")
		 .append("type", "document").append("tags", tagList).append("category", "Tax").append("expiry", new Date());
		
		 
		 
		 Document attachDoc1 = new Document();
		 attachDoc1.append("attachmentId", 83773).append("projectID", 10933).append("title", "Passport")
		 .append("description", "ID Document").append("url", "128.9.9.2/10933/passport.pdf").append("extension", "pdf")
		 .append("type", "document").append("tags", tagList).append("category", "ID").append("expiry", new Date());
		 
		 attachDocList.add(attachDoc);
		 attachDocList.add(attachDoc1);
		 collection.insertMany(attachDocList);
		 
	}
	
	public static void createNotes() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Notes");
		 List<String> tagList = new ArrayList<String>();
		 tagList.add("2018 Tax");
		 tagList.add("Finance");
		 
		 List<Integer> attachmentsList = new ArrayList<Integer>();
		 attachmentsList.add(10039);
		 attachmentsList.add(12032);
		 
		 Document noteDoc = new Document();
		 noteDoc.append("noteId", 1233).append("projectId", 1234).append("details", "This is a tax document which has to be submitted before Jul 31. liVerify Income liVerify Deductions")
		 .append("tags", tagList).append("attachments", attachmentsList);
		 collection.insertOne(noteDoc);
		
	}
	
	public static void createActivites() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Activites");	
		 List<Document> activityList = new ArrayList<Document>();
		 
		 Document activityDoc1 = new Document();
		 activityDoc1.append("date", new Date()).append("activity", "Client Created").append("by", "John Doe");
		 
		 Document activityDoc2 = new Document();
		 activityDoc2.append("date", new Date()).append("activity", "Modified").append("by", "John Spencer Donley").append("comment", "Added City tag");
		 
		 activityList.add(activityDoc1);
		 activityList.add(activityDoc2);
		 
		 Document mainActivitesDoc = new Document();
		 mainActivitesDoc.append("projectId", 1234)
		 .append("activityList", activityList);
		 collection.insertOne(mainActivitesDoc);
		
	}
	
	public static void createProjects() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Projects");
		 Document projectDoc = new Document();
		
		projectDoc.append("projectId", 1231).append("clientId", 10933).append("name", "File Tax for Sam").append("description", "File tax by Jul 31. <li>Verify Income")
		 .append("tags", "2018, tax, tax filing").append("status", "In Progress").append("priority", "Major")
		 .append("dueDate", new Date()).append("assignedTo", "Tom Cruise").append("owner", "DiCaprio");
		 collection.insertOne(projectDoc);	
	}
	
	public static void createReminders() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Reminders");
		
		 List<Integer> usersList = new ArrayList<Integer>();
		 usersList.add(23);
		 usersList.add(12);
		 
		 Document viaDoc = new Document();
		 viaDoc.append("email", Boolean.TRUE).append("sms", Boolean.FALSE).append("inApp", Boolean.TRUE);
		 
		 Document reminderDoc = new Document();
		 reminderDoc.append("reminderId", 123223).append("Title", "File tax for Morgan Freeman today").append("time", new Date())
		 .append("priority", "High").append("active", Boolean.TRUE).append("type", "project")
		 .append("linkedId", 1231).append("users", usersList).append("via", viaDoc);		 
		 collection.insertOne(reminderDoc);
		 
	}
	
	
	public static void createUsers() {
		 MongoDatabase db =  MongoDBConnection.getDBConnection();
		 MongoCollection<Document> collection = db.getCollection("Users");
		
		 List<String> rolesList = new ArrayList<String>();
		 rolesList.add("Administrators");
		 rolesList.add("Project Manager");
		 
		 Document viaDoc = new Document();
		 viaDoc.append("email", Boolean.TRUE).append("sms", Boolean.FALSE).append("inApp", Boolean.TRUE);
		 
		 Document userDoc = new Document();
		 userDoc.append("userId", 23).append("firstname", "Steve").append("lastname", "Jobs")
		 .append("email", "steve@apple.com").append("phone","+1 425-200-3040").append("image", "https://images4-b.ravelrycache.com/uploads/WoolhelminaToo/61240344/baby_tux_original_medium2.png\"")
		 .append("empId", 23433).append("department", "BFSI").append("reportsTo", 12).append("roles", rolesList).append("status", "Active");
		 
		 collection.insertOne(userDoc);
		 
	}
}
