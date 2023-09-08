package com.medikeep;

import static org.mockito.Mockito.when;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.medikeep.entity.PatientReport;
import com.medikeep.repository.PatientReportRepository;
import com.medikeep.service.PatientReportService;

@SpringBootTest(classes = PatientReportManagementSystemApplication.class)
public class PatientReportServiceTest {

	@Mock
	PatientReportRepository repository;
	
	@InjectMocks
	PatientReportService service;
	
	@Test
	public void testGetAllReports() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		PatientReport r1 = new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1);
		PatientReport r2 = new PatientReport(2,3, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1);
		
		List<PatientReport> reports = new ArrayList<>();
		reports.add(r1);
		reports.add(r2);
		
		when(repository.findAll()).thenReturn(reports);
		Iterable<PatientReport> result = service.getAllReports();
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertTrue(((List<PatientReport>) result).get(0).getTest_type().endsWith("t"));
		Assertions.assertTrue(((List<PatientReport>) result).get(1).getTest_type().endsWith("t"));
		Assertions.assertEquals(r1, ((List<PatientReport>) result).get(0));
		Assertions.assertEquals(r2, ((List<PatientReport>) result).get(1));
	}
	
	@Test
	public void testCreateReport() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		PatientReport r1 = new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1);
		
		when(repository.save(r1)).thenReturn(r1);
		PatientReport result = service.createReport(r1);
		Assertions.assertNotEquals(null, result);
		Assertions.assertTrue(result.getTest_result().endsWith("s"));
		Assertions.assertEquals(r1, result);
	}
	
	@Test
	public void testGetReportById() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Optional<PatientReport> r1 = Optional.of(new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1));
		
		when(repository.findById(1)).thenReturn(r1);
		Optional<PatientReport> result = service.getReportById(1);
		Assertions.assertNotEquals(null, result);
		
		Assertions.assertEquals(r1.get(), result.get());
	}
	
	@Test
	public void testGetReportByPatientId() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		PatientReport r1 = new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1);
		
		when(repository.findByPatient(2)).thenReturn(r1);
		PatientReport result = service.getReportByPatientId(2);
		Assertions.assertNotEquals(null, result);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(r1, result);
	}
	
	@Test
	public void testUpdateUser() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Optional<PatientReport> r1 = Optional.of(new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1));
		PatientReport r2 = new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1);
		
		when(repository.findById(1)).thenReturn(r1);
		Optional<PatientReport> result = service.getReportById(1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(r1.get(), result.get());
		
		r2.setBlood_pressure("90/140");
		//result.get().setName("Rajiv Kumar");
		
		when(repository.save(r2)).thenReturn(r2);
		PatientReport result2 = service.updateReport(r2,1);
		
		Assertions.assertNotEquals(null, result2);
		Assertions.assertNotEquals(result, result2);
		Assertions.assertEquals("90/140",result2.getBlood_pressure());

	}
	
	@Test
	public void testDeleteReport() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Optional<PatientReport> r1 = Optional.of(new PatientReport(1,2, "70/120","80","98%","detected type-2 diabetes","Blood Test",
				"detected type-2 diabetes","medication,control sugar intake",d1));
		
		when(repository.findById(1)).thenReturn(r1);
		Optional<PatientReport> result = service.getReportById(1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(r1.get(), result.get());
		
		String result2 = service.deleteReport(1);
		
		Assertions.assertNotEquals(null, result2);
		Assertions.assertEquals("Record with id 1 deleted successfully",result2);
	}
	
}
