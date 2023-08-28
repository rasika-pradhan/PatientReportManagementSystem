package com.medikeep.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	private int age;
	private String gender;
	private long contactInfo;
	private String medicalHistory;
	private Date date;
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Patient(int id, String name, int age, String gender, long contactInfo, String medicalHistory, Date date) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.contactInfo = contactInfo;
		this.medicalHistory = medicalHistory;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getContactInfo() {
		return contactInfo;
	}
	public void setContactInfo(long contactInfo) {
		this.contactInfo = contactInfo;
	}
	public String getMedicalHistory() {
		return medicalHistory;
	}
	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", contactInfo="
				+ contactInfo + ", medicalHistory=" + medicalHistory + ", date=" + date + "]";
	}
	
	
}
