import React from 'react';
import './splash.css';
import logo from './logo.png'

const Splash = () => {
    return(
        <div className='splash'>
            <div className='logo'>
            <img src={logo} />
            <p>Splash , Home & Listing</p>
            </div>
        </div>
    )
}

export default Splash;