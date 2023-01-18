import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            employees : []

        }
    }

    componentDidMount(){
        //Kérés küldése a szervernek
        //Összes alkalmazott lekérése. Alkalmazottak lista feltöltése.
        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees : response.data });
        })
    }

    //Kérés küldése a szervernek
    //Kiválasztott alkalmazott törlése
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((response) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
            console.log(response.data);
        })

    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Alkalmazottak</h2>
                <div className='row'>
                    <Link to="/addnewemployee">
                        <button className='btn btn-primary'>Új alkalmazott hozzáadása</button>
                    </Link>
                </div>
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
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailAddress}</td>
                                        <td>
                                            <Link to={`/updateemployee/${employee.id}`}>
                                                <button className='btn btn-info m-1'>Módosítás</button>
                                            </Link>
                                            <Link to="/">
                                                <button className='btn btn-danger mt-1 mb-1' onClick={() =>this.deleteEmployee(employee.id)}>Törlés</button>
                                            </Link>
                                            <Link to={`/viewemployee/${employee.id}`}>
                                                <button className='btn btn-info m-1'>Megtekintés</button>
                                            </Link>
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
}

export default ListEmployeeComponent;
