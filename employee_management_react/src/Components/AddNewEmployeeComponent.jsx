import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

class AddNewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName : '',
            lastName : '',
            emailAddress: ''
        }

        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);


    }

    //Vezetéknév kiolvasása az input mezőből
    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }

    //Keresztnév kiolvasása az input mezőből
    changefirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }

    //Email cím kiolvasása az input mezőből
    changeEmailAddressHandler = (event) => {
        this.setState({emailAddress : event.target.value});
    }

    //Kérés küldése a szervernek
    //Új alkalmazott hozzáadása
    saveEmployee = (e) => {
        e.preventDefault();
        let actualEmployee = {  lastName : this.state.lastName, 
                                firstName : this.state.firstName, 
                                emailAddress : this.state.emailAddress};
        EmployeeService.addNewEmployee(actualEmployee).then((response) => {
            console.log("Hozzáadva");
        })
    }



    render() {
        return (
            <div>
                <div className='container'>
                    <div className='container'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Új alkalmazott hozzáadása</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Vezetéknév</label>
                                        <input placeholder='vezetéknév' name='lastName' className='form-control'
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Keresztnév</label>
                                        <input placeholder='keresztnév' name='firstName' className='form-control'
                                        value={this.state.firstName} onChange={this.changefirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email cím</label>
                                        <input placeholder='email cím' name='emailAddress' className='form-control'
                                        value={this.state.emailAddress} onChange={this.changeEmailAddressHandler} />
                                    </div>
                                    <button className='btn btn-success m-2' onClick={this.saveEmployee}>Mentés</button>
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
}

export default AddNewEmployeeComponent;