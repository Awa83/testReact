import React, { Component, Fragment } from 'react';
import  UserForm  from './components/UserForm';
import profileImage from './img/maison.jpg';

//import logo from './logoAxenergy.png';
import './App.css';
import Formulaire from './components/Formulaire';
import FormProgressBar from './components/ProgressBar';







function App() {


  return (
    <div className="App">
      <h1> My React App</h1>
      <h2> Author: Aoitife Sehili</h2>
      <img src={profileImage} alt="profile-image" />

      <p>
          <div className="App-logo-header">
            <p> LOGO COMPONENT HEADER </p>
          </div>

          <h1>Progress Bar</h1>
          <div class="h-3 relative max-w-full rounded-full overflow-hidden">
              <div class="w-full h-full bg-gray-200 absolute" ></div>
          </div>
      </p>
     


      <UserForm />
     


      <header className="App-header">
    
      
        
       
      </header>
    </div>

    
  );
}

export default App;
