package com.medikeep.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medikeep.entity.User;
import com.medikeep.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public Iterable<User> getAllUsers() {
		return userRepo.findAll();
	}
	
	public User createUser(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> getUserById(Integer id) {
		return userRepo.findById(id);
	}
	
	public User getUserByName(String name){
		return userRepo.findByName(name);
	}
	
	public User updateUser(User user, Integer id) {
		userRepo.findById(id);
		return userRepo.save(user);
	}
	
	public User getUserByEmail(String email){
		return userRepo.findByEmail(email);
	}
}
