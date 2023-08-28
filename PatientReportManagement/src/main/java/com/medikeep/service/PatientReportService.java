package com.medikeep.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medikeep.entity.PatientReport;
import com.medikeep.repository.PatientReportRepository;

@Service
public class PatientReportService {

	@Autowired
	private PatientReportRepository repository;
	
	public Iterable<PatientReport> getAllReports(){
		return repository.findAll();
	}
	
	public PatientReport createReport(PatientReport report) {
		return repository.save(report);
	}
	
	public Optional<PatientReport> getReportById(Integer id) {
		return repository.findById(id);
	}
	
	public PatientReport updateReport(PatientReport report, Integer id) {
		repository.findById(id);
		return repository.save(report);
	}
	
	public String deleteReport(Integer id) {
		repository.findById(id);
		repository.deleteById(id);
		return "Record wiht id "+id+" deleted successfully";
	}
}
