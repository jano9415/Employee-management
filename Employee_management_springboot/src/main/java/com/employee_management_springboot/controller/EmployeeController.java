package com.employee_management_springboot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee_management_springboot.domain.Employee;
import com.employee_management_springboot.service.EmployeeServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;
	
	//Összes alkalmazott lekérése
	@GetMapping("/employees")
	public List<Employee> findAll(){
		return employeeServiceImpl.findAll();
		
	}
	
	//Új alkalmazott hozzáadása
	@PostMapping("/addnewemployee")
	public Employee addNewEmployee(@RequestBody Employee actualEmployee) {
		return employeeServiceImpl.save(actualEmployee);
	}
	
	//Keresés id szerint
	@GetMapping("/findbyid/{id}")
	public ResponseEntity<Employee> findById(@PathVariable Long id) {
		return employeeServiceImpl.findById(id);
	}
	
	//Alkalmazott valamelyik adatának módosítása
	@PutMapping("/updateemployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id , @RequestBody Employee modifiedEmployee){
		return employeeServiceImpl.updateEmployee(id, modifiedEmployee);
	}
	
	//Alkalmazott törlése
	@DeleteMapping("/deleteemployee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
		return employeeServiceImpl.deleteEmployee(id);
	}

}