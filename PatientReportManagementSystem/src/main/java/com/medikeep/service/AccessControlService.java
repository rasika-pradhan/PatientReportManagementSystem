package com.medikeep.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medikeep.entity.AccessControl;
import com.medikeep.repository.AccessControlRepository;

@Service
public class AccessControlService {

	@Autowired
	private AccessControlRepository repository;
	
	public Iterable<AccessControl> getAllAccesses(){
		return repository.findAll();
	}
	
	public AccessControl createAccess(AccessControl data) {
		return repository.save(data);
	}
	
	public Optional<AccessControl> getAccessById(Integer id) {
		return repository.findById(id);
	}
	
	public AccessControl getAccessByUser(Integer user) {
		return repository.findByUser(user);
	}
	
	public AccessControl updateAccess(AccessControl data, Integer id) {
		repository.findById(id);
		return repository.save(data);
		
	}
	
	public String deleteAccess(Integer id) {
		repository.findById(id);
		repository.deleteById(id);
		return "Record with id "+id+" deleted successfully";
	}
}
