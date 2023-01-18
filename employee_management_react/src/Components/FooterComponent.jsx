import React, { Component } from 'react';

class FooterComponent extends Component {

    //Aktuális dátum megjelenítése
    thisDate(){
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return <div>{year + " " + month + " " + day}</div>
    }

    render() {
        return (
            <div>
                <footer className='blockquote-footer'>
                    <span className='text-muter'>{this.thisDate()}</span>
                </footer>  
            </div>
        );
    }
}

export default FooterComponent;