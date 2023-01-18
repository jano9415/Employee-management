import React from 'react';

const FooterComponent = () => {

    //Aktuális dátum megjelenítése
    const thisDate = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return <div>{year + " " + month + " " + day}</div>
    }

    return (
        <div>
            <footer className='blockquote-footer'>
                <span className='text-muter'>{thisDate()}</span>
            </footer>
        </div>
    );
}

export default FooterComponent;