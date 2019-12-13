package com.infosys.dashboard.util;

import java.util.HashMap;
import java.util.Map;

import org.bson.Document;

import com.infosys.dashboard.db.MongoDBConnection;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;

public class LoadDBConstants {


	private static Map<String, String> defectTypeMap = null;
	private static Map<String, String> moduleMap = null;
	private LoadDBConstants() {
	}

	public static Map<String, String> loadDefectTypes() {
		if (defectTypeMap == null) {
			defectTypeMap= new HashMap<>();
			MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("DefectTypeColl");
			MongoCursor<Document> cursor = coll.find().iterator();
			try {
				while (cursor.hasNext()) {
					Document document = cursor.next();
					defectTypeMap.put(document.getString("defectType"), document.getString("alias"));
				}

			} finally {

			}
		}
		return defectTypeMap;
	}
	
	public static Map<String, String> loadModules() {
		if (moduleMap == null) {
			moduleMap= new HashMap<>();
			MongoCollection<Document> coll = MongoDBConnection.getDBConnection().getCollection("ModuleColl");
			MongoCursor<Document> cursor = coll.find().iterator();
			try {
				while (cursor.hasNext()) {
					Document document = cursor.next();
					moduleMap.put(document.getString("module"), document.getString("alias"));
				}

			} finally {

			}
		}
		return moduleMap;
	}

}
