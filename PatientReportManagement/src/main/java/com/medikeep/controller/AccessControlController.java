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

import com.medikeep.entity.AccessControl;
import com.medikeep.service.AccessControlService;

@RestController
@RequestMapping("/access")
public class AccessControlController {
	
	@Autowired
	private AccessControlService service;
	
	@GetMapping("/all")
	public Iterable<AccessControl> findAllAccesses(){
		return service.getAllAccesses();
	}
	
	@PostMapping("/create")
	public AccessControl createAccess(@RequestBody AccessControl data) {
		return service.createAccess(data);
	}
	
	@GetMapping("/{id}")
	public Optional<AccessControl> findOneAccess(@PathVariable Integer id) {
		return service.getAccessById(id);
	}
	
	@PutMapping("/update/{id}")
	public AccessControl updateAccess(@RequestBody AccessControl data, @PathVariable Integer id) {
		return service.updateAccess(data,id);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteAccess(@PathVariable Integer id) {
		return service.deleteAccess(id);
	}
}
