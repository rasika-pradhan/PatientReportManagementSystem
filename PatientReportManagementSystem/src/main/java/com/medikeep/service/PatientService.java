package com.medikeep.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medikeep.entity.Patient;
import com.medikeep.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository repository;
	
	public Patient createPatient(Patient patient) {
		return repository.save(patient);
	}
	
	public Iterable<Patient> getAllPatients() {
		return repository.findAll();
	}
	
//	public Optional<Patient> getPatientById(Integer id){
//		return repository.findById(id);
//	}
	
	public Optional<Patient> getPatientById(Integer id){
		return repository.findById(id);
	}
	
	public Patient getPatientByName(String name){
		return repository.findByName(name);
	}
	
	public Patient updatePatient(Patient patient, Integer id) {
		repository.findById(id);
		return repository.save(patient);
		
	}
	
	public String deletePatient(Integer id) {
		repository.findById(id);
		repository.deleteById(id);
		return "Record with id "+id+" deleted successfully";
	}
}
