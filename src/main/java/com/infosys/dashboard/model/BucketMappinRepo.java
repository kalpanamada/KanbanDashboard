package com.infosys.dashboard.model;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BucketMappinRepo extends MongoRepository<BucketMappingData, String>{
	
	public BucketMappingData findByDate(String date);

}
