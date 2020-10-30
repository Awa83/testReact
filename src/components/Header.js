import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
    return(
        <div className ="Header">
             <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

//export default Header;