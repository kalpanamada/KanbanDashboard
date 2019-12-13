package com.infosys.dashboard.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.logging.Logger;

public class PropertiesReader {
	private static Properties prop =null;
	
	private PropertiesReader() {
		
	}
	
	public static Properties load() {	
		if(prop ==null) {
			prop =new Properties();
			InputStream input = null;
			try {
				input = PropertiesReader.class.getClassLoader().getResourceAsStream("config.properties");
				prop.load(input);
			
			} catch (IOException ex) {
				
			}
		}
		
		return prop;

	  }
		
	

}
