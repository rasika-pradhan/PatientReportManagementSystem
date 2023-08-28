package com.medikeep.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Access_Control")
public class AccessControl {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private int patient_id;
	private int user_id;
	public AccessControl() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AccessControl(int id, int patient_id, int user_id) {
		super();
		this.id = id;
		this.patient_id = patient_id;
		this.user_id = user_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	@Override
	public String toString() {
		return "AccessControl [id=" + id + ", patient_id=" + patient_id + ", user_id=" + user_id + "]";
	}
	
}
