import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

const AddNewEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {

        if (id) {
            //Kérés küldése a szervernek
            //Alkalmazott keresése id szerint
            //Input mezők feltöltése a szervertől jövő adatokkal
            EmployeeService.findById(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailAddress(response.data.emailAddress)
            }).catch(error => {
                console.log(error);
            })

        }

    },)

    //Alkalmazott mentése vagy módosítása
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const actualEmployee = { firstName, lastName, emailAddress }

        if (id) {
            //Kérés küldése a szervernek
            //Alkalmazott módosítása
            EmployeeService.updateEmployee(id, actualEmployee).then(() => {
                navigate('/')
            }).catch(error => {
                console.log(error);
            })

        }
        else {
            //Kérés küldése a szervernek
            //Új alkalmazott hozzáadása
            EmployeeService.addNewEmployee(actualEmployee).then((response) => {
                navigate('/')

            }).catch(error => {
                console.log(error);
            })

        }
    }

    //Cím bállítása
    const getTitle = () => {
        if (id) {
            return <h3 className='text-center'>Alkalmazott módosítása</h3>
        }
        else {
            return <h3 className='text-center'>Új alkalmazott hozzáadása</h3>
        }
    }

    return (
        <div>
            <div className='container m-3'>
                <div className='container'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {getTitle()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label className='form-label'>Vezetéknév</label>
                                    <input
                                        type="text"
                                        placeholder='vezetéknév'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Keresztnév</label>
                                    <input
                                        type="text"
                                        placeholder='keresztnév'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Email cím</label>
                                    <input
                                        type="text"
                                        placeholder='email cím'
                                        name='emailAddress'
                                        className='form-control'
                                        value={emailAddress}
                                        onChange={(e) => setEmailAddress(e.target.value)} />
                                </div>
                                <button className='btn btn-success m-2' onClick={(e) => saveOrUpdateEmployee(e)}>Mentés</button>
                                <Link to="/">
                                    <button className='btn btn-danger'>Mégse</button>
                                </Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddNewEmployeeComponent;