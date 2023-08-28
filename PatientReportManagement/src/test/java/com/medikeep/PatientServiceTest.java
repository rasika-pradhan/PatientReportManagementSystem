package com.medikeep;

import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.medikeep.entity.Patient;
import com.medikeep.repository.PatientRepository;
import com.medikeep.service.PatientService;

@SpringBootTest(classes = PatientReportManagementApplication.class)
public class PatientServiceTest {

	@Mock
	PatientRepository patientRepo;
	
	@InjectMocks
	PatientService service = new PatientService();
	
	@Test
	public void testCreatePatient() {
		Patient p1 = new Patient();
		Date d1 = new Date(2022-06-15);
		p1.setId(2);
		p1.setName("Ram Kumar");
		p1.setAge(38);
		p1.setGender("Male");
		p1.setContactInfo(9965332654L);
		p1.setMedicalHistory("fractured forearm at age 15");
		p1.setDate(d1);
		
		when(patientRepo.save(p1)).thenReturn(p1);
		Patient result = service.createPatient(p1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertTrue(result.getName().endsWith("r"));
		Assertions.assertEquals("Ram Kumar", result.getName());
	}
	
	@Test
	public void testGetAllPatients() {
		Date d1 = new Date(2022-06-15);
		Patient p1 = new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1);
		Patient p2 = new Patient(3,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1);
		
		List<Patient> patients = new ArrayList<>();
		patients.add(p1);
		patients.add(p2);
		
		when(patientRepo.findAll()).thenReturn(patients);
		Iterable<Patient> result = service.getAllPatients();
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertTrue(((List<Patient>) result).get(0).getName().endsWith("r"));
		Assertions.assertEquals("Ram Kumar", ((List<Patient>) result).get(0).getName());
	}
}
