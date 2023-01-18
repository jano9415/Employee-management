import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService';
import withRouter from './withRouter';

class ViewEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            actualEmployee : {}

        }
    }

    componentDidMount(){
        //Kérés küldése a szervernek
        //Alkalmazott keresése id szerint. Alkalmazott objektum beállítása.
        EmployeeService.findById(this.props.params.id).then( (response) => {
            this.setState( {actualEmployee : response.data} );
        } )

    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>Alkalmazott adatai</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Vezetéknév:</label>
                            <div>{this.state.actualEmployee.lastName}</div>
                        </div>
                        <div className='row'>
                            <label>Keresztnév:</label>
                            <div>{this.state.actualEmployee.firstName}</div>
                        </div>
                        <div className='row'>
                            <label>Email cím:</label>
                            <div>{this.state.actualEmployee.emailAddress}</div>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent);