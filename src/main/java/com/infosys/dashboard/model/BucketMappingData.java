package com.infosys.dashboard.model;

import java.util.List;
import org.bson.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown =  true)
public class BucketMappingData {
	

	private String date;
	private List<Plan> plan;
	private List<Actual> actual;
	private Integer version;
	private Boolean freeze;
	
	public Boolean getFreeze() {
		return freeze;
	}
	public void setFreeze(Boolean freeze) {
		this.freeze = freeze;
	}
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public List<Plan> getPlan() {
		return plan;
	}
	public void setPlan(List<Plan> plan) {
		this.plan = plan;
	}
	public List<Actual> getActual() {
		return actual;
	}
	public void setActual(List<Actual> actual) {
		this.actual = actual;
	}
	
	
	

}
