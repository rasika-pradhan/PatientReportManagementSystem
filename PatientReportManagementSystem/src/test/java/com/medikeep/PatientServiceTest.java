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

import com.medikeep.entity.Patient;
import com.medikeep.repository.PatientRepository;
import com.medikeep.service.PatientService;

@SpringBootTest(classes = PatientReportManagementSystemApplication.class)
public class PatientServiceTest {

	@Mock
	PatientRepository patientRepo;
	
	@InjectMocks
	PatientService service = new PatientService();
	
	@Test
	public void testCreatePatient() {
		Patient p1 = new Patient();
		LocalDate d1 = LocalDate.of(12,12,12);
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
		//Assertions.assertTrue(result.getName().endsWith("r"));
		Assertions.assertEquals("Ram Kumar", result.getName());
		Assertions.assertEquals(38, result.getAge());
		Assertions.assertEquals("Male", result.getGender());
		Assertions.assertEquals(9965332654L, result.getContactInfo());
		Assertions.assertEquals(result.getMedicalHistory(),"fractured forearm at age 15");
		Assertions.assertEquals(d1, result.getDate());
	}
	
	@Test
	public void testGetAllPatients() {
		LocalDate d1 = LocalDate.of(2022,06,15);
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
	
	@Test
	public void testgetPatientById() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Optional<Patient> p1 = Optional.of(new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1));
		
		when(patientRepo.findById(2)).thenReturn(p1);
		Optional<Patient> result = service.getPatientById(2);
		
		Assertions.assertNotEquals(null, result);
		
		Assertions.assertEquals(p1.get(), result.get());
		
	}
	
	@Test
	public void testgetPatientByName() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Patient p1 = new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1);
		
		when(patientRepo.findByName("Ram Kumar")).thenReturn(p1);
		Patient result = service.getPatientByName("Ram Kumar");
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals("Ram Kumar", result.getName());
		Assertions.assertEquals(38, result.getAge());
		Assertions.assertEquals("Male", result.getGender());
		Assertions.assertEquals(9965332654L, result.getContactInfo());
		Assertions.assertEquals(result.getMedicalHistory(),"fractured forearm at age 15");
		Assertions.assertEquals(d1, result.getDate());
	}
	
	@Test
	public void tesUpdatePatient() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Optional<Patient> p1 = Optional.of(new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1));
		Patient p2 = new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1);
		
		when(patientRepo.findById(2)).thenReturn(p1);
		Optional<Patient> result = service.getPatientById(2);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(p1.get(), result.get());
		
		p2.setName("Rajiv Kumar");
		//result.get().setName("Rajiv Kumar");
		
		when(patientRepo.save(p2)).thenReturn(p2);
		Patient result2 = service.updatePatient(p2,2);
		
		Assertions.assertNotEquals(null, result2);
		Assertions.assertEquals("Rajiv Kumar",result2.getName());
		Assertions.assertEquals(38, result2.getAge());
		Assertions.assertEquals("Male", result2.getGender());
		Assertions.assertEquals(9965332654L, result2.getContactInfo());
		Assertions.assertEquals("fractured forearm at age 15",result2.getMedicalHistory());
		Assertions.assertEquals(d1, result2.getDate());
	}
	
	@Test
	public void testDeletePatient() {
		LocalDate d1 = LocalDate.of(2022,06,15);
		Optional<Patient> p1 = Optional.of(new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1));
		//Patient p2 = new Patient(2,"Ram Kumar",38,"Male",9965332654L,"fractured forearm at age 15",d1);
		
		when(patientRepo.findById(2)).thenReturn(p1);
		Optional<Patient> result = service.getPatientById(2);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(p1.get(), result.get());
		
		//Mockito.when(patientRepo.deleteById(2)).thenReturn("Record with id 2 deleted successfully");
		String result2 = service.deletePatient(2);
		

		Assertions.assertEquals("Record with id 2 deleted successfully",result2);
		
	}
}
