package com.infosys.dashboard.db;



import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;


public class MongoDBConnection {

	private static MongoDatabase db = null;
	static MongoClient mongoClient=null;

	private MongoDBConnection() {
	}

	public static MongoDatabase getDBConnection() {
		if (db == null) {			
		      mongoClient = new MongoClient("localhost", 27017);
			db = mongoClient.getDatabase("DefectDatabase");
		}
		return db;

	}
	
	public static void closeConnection() {
		mongoClient.close();
	}

}