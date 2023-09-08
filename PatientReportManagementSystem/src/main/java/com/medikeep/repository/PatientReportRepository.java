package com.medikeep.repository;

import org.springframework.data.repository.CrudRepository;

import com.medikeep.entity.PatientReport;

public interface PatientReportRepository extends CrudRepository<PatientReport, Integer>{

	PatientReport findByPatient(Integer patient);
}
