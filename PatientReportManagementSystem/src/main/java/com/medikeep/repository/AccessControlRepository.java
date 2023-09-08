package com.medikeep.repository;

import org.springframework.data.repository.CrudRepository;

import com.medikeep.entity.AccessControl;

public interface AccessControlRepository extends CrudRepository<AccessControl, Integer>{
	
	AccessControl findByUser(Integer user);
}
