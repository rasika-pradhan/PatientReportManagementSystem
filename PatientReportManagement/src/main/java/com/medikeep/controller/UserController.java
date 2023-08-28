package com.medikeep.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medikeep.entity.User;
import com.medikeep.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping("/all")
	public Iterable<User> findAll() {
		return service.getAllUsers();
	}
	
	@PostMapping("/create")
	public User createUser(@RequestBody User user) {
		return service.createUser(user);
	}
	
	@GetMapping("/{id}")
	public Optional<User> findOne(@PathVariable Integer id) {
		return service.getUserById(id);
	}
	
	@GetMapping("/name/{name}")
	public User findByName(@PathVariable String name){
		return service.getUserByName(name);
	}
	
	@PutMapping("/update/{id}")
	public User updateUser(@RequestBody User user, @PathVariable Integer id) {
		return service.updateUser(user,id);
	}
}
