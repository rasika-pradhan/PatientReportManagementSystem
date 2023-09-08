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

import com.medikeep.entity.User;
import com.medikeep.repository.UserRepository;
import com.medikeep.service.UserService;

@SpringBootTest(classes = PatientReportManagementSystemApplication.class)
public class UserServiceTest {

	@Mock
	UserRepository userRepo;
	
	@InjectMocks
	UserService service;
	
	@Test
	public void testGetAllUsers() {
		User u1 = new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null);
		User u2 = new User(2, "Meera Kumari","ram@gmail.com","Ram123","nurse",null);
		
		List<User> users = new ArrayList<>();
		users.add(u1);
		users.add(u2);
		
		when(userRepo.findAll()).thenReturn(users);
		Iterable<User> result = service.getAllUsers();
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertTrue(((List<User>) result).get(0).getName().endsWith("r"));
		Assertions.assertTrue(((List<User>) result).get(1).getName().endsWith("i"));
		Assertions.assertEquals(u1, ((List<User>) result).get(0));
		Assertions.assertEquals(u2, ((List<User>) result).get(1));
	}
	
	@Test
	public void testCreateUser() {
		User u1 = new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null);
		
		when(userRepo.save(u1)).thenReturn(u1);
		User result = service.createUser(u1);
		Assertions.assertNotEquals(null, result);
		Assertions.assertTrue(result.getName().endsWith("r"));
		Assertions.assertEquals("Ram Kumar", result.getName());
		Assertions.assertEquals("ram@gmail.com", result.getEmail());
	}
	
	@Test
	public void testGetUserById() {
		Optional<User> u1 = Optional.of(new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null));
		
		when(userRepo.findById(2)).thenReturn(u1);
		Optional<User> result = service.getUserById(2);
		Assertions.assertNotEquals(null, result);
		
		Assertions.assertEquals(u1.get(), result.get());
	}
	
	@Test
	public void testGetUserByName() {
		User u1 = new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null);
		
		when(userRepo.findByName("Ram Kumar")).thenReturn(u1);
		User result = service.getUserByName("Ram Kumar");
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(u1, result);
	}
	
	@Test
	public void testGetUserByEmail() {
		User u1 = new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null);
		
		when(userRepo.findByEmail("ram@gmail.com")).thenReturn(u1);
		User result = service.getUserByEmail("ram@gmail.com");
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(u1, result);
	}
	
	@Test
	public void testUpdateUser() {
		Optional<User> u1 = Optional.of(new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null));
		User u2 = new User(1, "Ram Kumar","ram@gmail.com","Ram123","nurse",null);
		
		when(userRepo.findById(1)).thenReturn(u1);
		Optional<User> result = service.getUserById(1);
		
		Assertions.assertNotEquals(null, result);
		Assertions.assertEquals(u1.get(), result.get());
		
		u2.setName("Rajiv Kumar");
		//result.get().setName("Rajiv Kumar");
		
		when(userRepo.save(u2)).thenReturn(u2);
		User result2 = service.updateUser(u2,1);
		
		Assertions.assertNotEquals(null, result2);
		Assertions.assertNotEquals(result, result2);
		Assertions.assertEquals("Rajiv Kumar",result2.getName());
//		Assertions.assertEquals(38, result2.getAge());
//		Assertions.assertEquals("Male", result2.getGender());
//		Assertions.assertEquals(9965332654L, result2.getContactInfo());
//		Assertions.assertEquals("fractured forearm at age 15",result2.getMedicalHistory());
//		Assertions.assertEquals(d1, result2.getDate());
	}
}
