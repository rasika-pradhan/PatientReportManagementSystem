package com.medikeep.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medikeep.entity.Patient;
import com.medikeep.service.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientService service;
	
	@GetMapping("/all")
	public Iterable<Patient> findAll() {
		return service.getAllPatients();
	}
	
	@PostMapping("/create")
	public Patient createPatient(@RequestBody Patient patient) {
		return service.createPatient(patient);
	}
	
	@GetMapping("/{id}")
	public Optional<Patient> findOne(@PathVariable Integer id) {
		return service.getPatientById(id);
	}
	
	@GetMapping("/name/{name}")
	public Patient findByName(@PathVariable String name){
		return service.getPatientByName(name);
	}
	
	@PutMapping("/update/{id}")
	public Patient updatePatient(@RequestBody Patient patient, @PathVariable Integer id) {
		return service.updatePatient(patient, id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Integer id) {
		service.deletePatient(id);
		return "Record wiht id "+id+" deleted successfully";
	}
}
