package com.infosys.dashboard.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
@JsonIgnoreProperties(ignoreUnknown = true)

public class Defect {
	@JsonProperty("DefectId")
	private int defectId;
	
	@JsonProperty("Created By")
	private String createdBy;
	
	@JsonProperty("Description")
	private String description;
	
	@JsonProperty("Severity")
	private String severity;
	
	@JsonProperty("Status")
	private String status;
	
	@JsonProperty("Summary")
	private String summary;
	
	@JsonProperty("Phase Found In")
	private String phaseFoundIn;
	
	@JsonProperty("Defect Type")
	private String defectType;
	
	@JsonProperty("Program")
	private String program;
	
	@JsonProperty("Application Found In SubTeam")
	private String applicationFoundInSubTeam;
	
	@JsonProperty("Creation Date")
	private Date creationDate;
	
	@JsonProperty("Modified Date")
	private Date modifiedDate;
	
	private String complexity;
	private String workedBy;
	
	public String getComplexity() {
		return complexity;
	}
	public void setComplexity(String complexity) {
		this.complexity = complexity;
	}
	public String getWorkedBy() {
		return workedBy;
	}
	public void setWorkedBy(String workedBy) {
		this.workedBy = workedBy;
	}
	public int getDefectId() {
		return defectId;
	}
	public void setDefectId(int defectId) {
		this.defectId = defectId;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public String getProgram() {
		return program;
	}
	public void setProgram(String program) {
		this.program = program;
	}
	public String getApplicationFoundInSubTeam() {
		return applicationFoundInSubTeam;
	}
	public void setApplicationFoundInSubTeam(String applicationFoundInSubTeam) {
		this.applicationFoundInSubTeam = applicationFoundInSubTeam;
	}
	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	public Date getModifiedDate() {
		return modifiedDate;
	}
	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	
    

}
