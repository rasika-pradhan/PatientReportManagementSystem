package com.medikeep.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medikeep.entity.User;
import com.medikeep.entity.UserLogin;
import com.medikeep.repository.UserRepository;
import com.medikeep.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@Autowired
	private UserRepository repo;
	
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
	
	@GetMapping("/email/{email}")
	public User findByEmail(@PathVariable String email){
		return service.getUserByEmail(email);
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<User> userLogin(@RequestBody UserLogin request) {
//        User user = service.getUserByEmail(request.getEmail());
//        if (user == null) {
//            return ResponseEntity.status(401).build();
//        }
//		else if(!user.getPassword().equals(request.getPassword())){
//			return ResponseEntity.status(401).build();
//		}
//
//        return ResponseEntity.ok(user);
//    }
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:3000")
	public User userLogin(@RequestBody UserLogin request) {
        User user = service.getUserByEmail(request.getEmail());
        if (user == null) {
            return null;
        }
		else if(!user.getPassword().equals(request.getPassword())){
			return null;
		}

        return user;
    }
}
