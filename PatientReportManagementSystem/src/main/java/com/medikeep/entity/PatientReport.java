package com.medikeep.entity;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Patient_Report")
public class PatientReport {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private int patient;
	private String blood_pressure;
	
	//@Column(name="pulse_rate")
	private String pulse_rate;
	private String blood_oxygen;
	private String diagnosis_info;
	private String test_type;
	private String test_result;
	private String consultation;
	private LocalDate date;
	public PatientReport() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PatientReport(int id, int patient_id, String blood_pressure, String pulseRate, String blood_oxygen,
			String diagnosis_info, String test_type, String test_result, String consultation, LocalDate date) {
		super();
		this.id = id;
		this.patient = patient_id;
		this.blood_pressure = blood_pressure;
		this.pulse_rate = pulseRate;
		this.blood_oxygen = blood_oxygen;
		this.diagnosis_info = diagnosis_info;
		this.test_type = test_type;
		this.test_result = test_result;
		this.consultation = consultation;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPatient_id() {
		return patient;
	}
	public void setPatient_id(int patient_id) {
		this.patient = patient_id;
	}
	public String getBlood_pressure() {
		return blood_pressure;
	}
	public void setBlood_pressure(String blood_pressure) {
		this.blood_pressure = blood_pressure;
	}
	public String getPulseRate() {
		return pulse_rate;
	}
	public void setPulseRate(String pulseRate) {
		this.pulse_rate = pulseRate;
	}
	public String getBlood_oxygen() {
		return blood_oxygen;
	}
	public void setBlood_oxygen(String blood_oxygen) {
		this.blood_oxygen = blood_oxygen;
	}
	public String getDiagnosis_info() {
		return diagnosis_info;
	}
	public void setDiagnosis_info(String diagnosis_info) {
		this.diagnosis_info = diagnosis_info;
	}
	public String getTest_type() {
		return test_type;
	}
	public void setTest_type(String test_type) {
		this.test_type = test_type;
	}
	public String getTest_result() {
		return test_result;
	}
	public void setTest_result(String test_result) {
		this.test_result = test_result;
	}
	public String getConsultation() {
		return consultation;
	}
	public void setConsultation(String consultation) {
		this.consultation = consultation;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "PatientReport [id=" + id + ", patient_id=" + patient + ", blood_pressure=" + blood_pressure
				+ ", pulseRate=" + pulse_rate + ", blood_oxygen=" + blood_oxygen + ", diagnosis_info=" + diagnosis_info
				+ ", test_type=" + test_type + ", test_result=" + test_result + ", consultation=" + consultation
				+ ", date=" + date + "]";
	}
	
}