package com.medikeep;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.medikeep.entity.AccessControl;
import com.medikeep.repository.AccessControlRepository;
import com.medikeep.service.AccessControlService;

@SpringBootTest(classes = PatientReportManagementSystemApplication.class)
public class AccessControlServiceTest {

	@Mock
	AccessControlRepository repository;
	
	@InjectMocks
	AccessControlService service;
	
	@Test
	public void testGetAllAccesses() {
		AccessControl a1 = new AccessControl(1,2,4);
		AccessControl a2 = new AccessControl(2,1,3);
		
		List<AccessControl> accesses = new ArrayList<>();
		accesses.add(a1);
		accesses.add(a2);
		
		when(repository.findAll()).thenReturn(accesses);
		Iterable<AccessControl> result = service.getAllAccesses();
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(a1, ((List<AccessControl>) result).get(0));
		Assertions.assertEquals(a2, ((List<AccessControl>) result).get(1));
	}
	
	@Test
	public void testCreateAccess() {
		AccessControl a1 = new AccessControl(1,2,4);
		
		when(repository.save(a1)).thenReturn(a1);
		AccessControl result = service.createAccess(a1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(a1, result);
	}
	
	@Test
	public void testGetAccessById() {
		Optional<AccessControl> a1 = Optional.of(new AccessControl(1,2,4));
		
		when(repository.findById(1)).thenReturn(a1);
		Optional<AccessControl> result = service.getAccessById(1);
		Assertions.assertNotEquals(null, result);
		
		Assertions.assertEquals(a1.get(), result.get());
	}
	
	@Test
	public void testGetAccessByUser() {
		AccessControl a1 = new AccessControl(1,2,4);
		
		when(repository.findByUser(4)).thenReturn(a1);
		AccessControl result = service.getAccessByUser(4);
		Assertions.assertNotEquals(null, result);
		
		Assertions.assertEquals(a1, result);
	}
	
	@Test
	public void testUpdateAccess() {
		Optional<AccessControl> a1 = Optional.of(new AccessControl(1,2,4));
		AccessControl a2 = new AccessControl(1,2,4);
		
		when(repository.findById(1)).thenReturn(a1);
		Optional<AccessControl> result = service.getAccessById(1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(a1.get(), result.get());
		
		a2.setPatient_id(5);
		
		when(repository.save(a2)).thenReturn(a2);
		AccessControl result2 = service.updateAccess(a2,1);
		
		Assertions.assertNotEquals(null, result2);
		Assertions.assertNotEquals(result, result2);
		Assertions.assertEquals(5,result2.getPatient_id());

	}
	
	@Test
	public void testDeleteAccess() {
		Optional<AccessControl> a1 = Optional.of(new AccessControl(1,2,4));
		
		when(repository.findById(1)).thenReturn(a1);
		Optional<AccessControl> result = service.getAccessById(1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(a1.get(), result.get());
		
		String result2 = service.deleteAccess(1);
		
		Assertions.assertNotEquals(null, result2);
		Assertions.assertEquals("Record with id 1 deleted successfully",result2);
	}
}
