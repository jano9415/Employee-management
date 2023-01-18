package com.employee_management_springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employee_management_springboot.domain.Employee;
import com.employee_management_springboot.exception.ResourceNotFoundException;
import com.employee_management_springboot.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	//Összes alkalmazott lekérése
	@Override
	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}

	//Új alkalmazott hozzáadása
	@Override
	public Employee save(Employee actualEmployee) {
		return employeeRepository.save(actualEmployee);
	}

	//Keresés id szerint
	@Override
	public ResponseEntity<Employee> findById(Long id) {
		Employee actualEmployee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id: " + id + " Alkalmazott nem található!"));
		return ResponseEntity.ok(actualEmployee);
	}

	//Alkalmazott valamelyik adatának módosítása
	@Override
	public ResponseEntity<Employee> updateEmployee(Long id, Employee modifiedEmployee) {
		Employee actualEmployee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id: " + id + " Alkalmazott nem található!"));
		
		actualEmployee.setFirstName(modifiedEmployee.getFirstName());
		actualEmployee.setLastName(modifiedEmployee.getLastName());
		actualEmployee.setEmailAddress(modifiedEmployee.getEmailAddress());
		
		Employee updatedEmployee = employeeRepository.save(actualEmployee);
		
		return ResponseEntity.ok(updatedEmployee);
	}

	//Alkalmazott törlése
	@Override
	public ResponseEntity<String> deleteEmployee(Long id) {
		Employee actualEmployee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id: " + id + " Alkalmazott nem található!"));
		
		employeeRepository.delete(actualEmployee);
		String response = "successdelete";
		return ResponseEntity.ok(response);
	}
	
	
	
	

}