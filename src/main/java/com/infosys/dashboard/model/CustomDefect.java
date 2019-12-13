package com.infosys.dashboard.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
@JsonIgnoreProperties(ignoreUnknown = true)

public class CustomDefect {
	@JsonProperty("DefectId")
	private int defectId;
	
	@JsonProperty("Severity")
	private String severity;
	
	@JsonProperty("Status")
	private String status;
	
	@JsonProperty("Summary")
	private String summary;
	
	@JsonProperty("Defect Type")
	private String defectType;
	
	@JsonProperty("Phase Found In")
	private String phaseFoundIn;
	
	@JsonProperty("Application Found In SubTeam")
	private String applicationFoundInSubTeam;


	
	public int getDefectId() {
		return defectId;
	}
	public void setDefectId(int defectId) {
		this.defectId = defectId;
	}

	public String getSeverity() {
		return severity;
	}
	public void setSeverity(String severity) {
		this.severity = severity;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getPhaseFoundIn() {
		return phaseFoundIn;
	}
	public void setPhaseFoundIn(String phaseFoundIn) {
		this.phaseFoundIn = phaseFoundIn;
	}
	public String getDefectType() {
		return defectType;
	}
	public void setDefectType(String defectType) {
		this.defectType = defectType;
	}
	public String getApplicationFoundInSubTeam() {
		return applicationFoundInSubTeam;
	}
	public void setApplicationFoundInSubTeam(String applicationFoundInSubTeam) {
		this.applicationFoundInSubTeam = applicationFoundInSubTeam;
	}
	
	
	
	
	
	
    

}
