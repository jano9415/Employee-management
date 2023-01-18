import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-light bg-light'>
                        <div><h2>Employee Management App</h2></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;