package com.medikeep.repository;

import org.springframework.data.repository.CrudRepository;

import com.medikeep.entity.User;

public interface UserRepository extends CrudRepository<User, Integer>{

	User findByName(String name);
	User findByEmail(String email);
}
