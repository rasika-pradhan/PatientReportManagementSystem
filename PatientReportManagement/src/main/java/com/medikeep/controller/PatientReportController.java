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

import com.medikeep.entity.PatientReport;
import com.medikeep.service.PatientReportService;

@RestController
@RequestMapping("/report")
public class PatientReportController {
	
	@Autowired
	private PatientReportService service;
	
	@GetMapping("/all")
	public Iterable<PatientReport> findAllReports(){
		return service.getAllReports();
	}
	
	@PostMapping("/create")
	public PatientReport createReport(@RequestBody PatientReport report) {
		return service.createReport(report);
	}
	
	@GetMapping("/{id}")
	public Optional<PatientReport> findOneReport(@PathVariable Integer id) {
		return service.getReportById(id);
	}
	
	@PutMapping("/update/{id}")
	public PatientReport updateReport(@RequestBody PatientReport report, @PathVariable Integer id) {
		return service.updateReport(report,id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteReport(@PathVariable Integer id) {
		return service.deleteReport(id);
	}
}
