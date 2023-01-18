import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

const ViewEmployeeComponent = () => {

    const [actualEmployee, setActualEmployee] = useState([])
    const { id } = useParams()


    useEffect(() => {
        //Kérés küldése a szervernek
        //Alkalmazott keresése id szerint. Alkalmazott objektum beállítása.
        EmployeeService.findById(id).then((response) => {
            setActualEmployee(response.data)

        }).catch(error => {
            console.log(error)
        })

    }, )

    return (
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>Alkalmazott adatai</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Vezetéknév:</label>
                        <div>{actualEmployee.lastName}</div>
                    </div>
                    <div className='row'>
                        <label>Keresztnév:</label>
                        <div>{actualEmployee.firstName}</div>
                    </div>
                    <div className='row'>
                        <label>Email cím:</label>
                        <div>{actualEmployee.emailAddress}</div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ViewEmployeeComponent;