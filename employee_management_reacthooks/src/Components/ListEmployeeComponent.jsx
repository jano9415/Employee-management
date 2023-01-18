import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getEmployees();

    }, [])

    const getEmployees = () => {
        //Kérés küldése a szervernek
        //Összes alkalmazott lekérése. Alkalmazottak lista feltöltése.
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);

        }).catch(error => {
            console.log(error);
        })
    }

    //Kérés küldése a szervernek
    //Kiválasztott alkalmazott törlése
    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then((response) => {
            getEmployees()

        }).catch(error => {
            console.log(error);
        })

    }


    return (
        <div>
            <h2 className='text-center'>Alkalmazottak</h2>
            <Link to="/addnewemployee" className='btn btn-primary mb-2'>Új alkalmazott hozzáadása</Link>
            <div className='row' >
                <table className='table table-striped table-bordered' >
                    <thead>
                        <tr>
                            <th>Vezetéknév</th>
                            <th>Keresztnév</th>
                            <th>Email cím address</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailAddress}</td>
                                        <td>
                                            <Link to={`/updateemployee/${employee.id}`} className='btn btn-info m-1'>Módosítás</Link>
                                            <Link className='btn btn-danger mt-1 mb-1' onClick={() => deleteEmployee(employee.id)}>Törlés</Link>
                                            <Link to={`/viewemployee/${employee.id}`} className='btn btn-info m-1'>Megtekintés</Link>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;