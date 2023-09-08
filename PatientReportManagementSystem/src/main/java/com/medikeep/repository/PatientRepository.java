package com.medikeep.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.medikeep.entity.Patient;

public interface PatientRepository extends CrudRepository<Patient, Integer>{

	Patient findByName(String name);
	//Patient findById(Integer id);
}
