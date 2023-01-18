package com.employee_management_springboot.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.employee_management_springboot.domain.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	
	//Összes alkalmazott lekérése
	@Override
	public List<Employee> findAll();

}
