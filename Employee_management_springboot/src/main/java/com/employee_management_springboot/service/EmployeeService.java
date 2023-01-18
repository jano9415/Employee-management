package com.employee_management_springboot.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.employee_management_springboot.domain.Employee;

public interface EmployeeService {
	
	//Összes alkalmazott lekérése
	public List<Employee> findAll();
	
	//Új alkalmazott hozzáadása
	public Employee save(Employee actualEmployee);
	
	//Keresés id szerint
	public ResponseEntity<Employee> findById(Long id);
	
	//Alkalmazott valamelyik adatának módosítása
	public ResponseEntity<Employee> updateEmployee(Long id , Employee modifiedEmployee);
	
	//Alkalmazott törlése
	public ResponseEntity<String> deleteEmployee(Long id);

}
