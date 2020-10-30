import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card'
import Formulaire from './Formulaire';
import UserForm from './UserForm';




export class TypeDeLogement extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep(); // A l'étape suivante
    }

    constructor(props) {
        super(props);
        this.state = { step: 1 };
    }


    test() {
   alert(" div clicked ON ");
    
    }



    render() {

        const { values , saisieChamps} = this.props;
        //this.props.values


        return (

            <div class="etape1">
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title=" Type de logement " />
                       
                        <br/>

                            <div onClick={() => this.continue} className="selectProprio">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg" >
                                    <img class="w-full" src="./img/maison.jpg" alt="PROPRIETAIRE" />
                                        <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>
                                        </svg>
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2">PROPRIETAIRE</div>
                                            <p class="text-gray-700 text-base">
                                                PROPRIETAIRE
                                            </p>
                                        </div>    
                                </div>
                            </div>    

                        <br/>

                            <div onClick={() => this.test()} className="selectLocataire">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src="./img/maison.jpg" alt="LOCATAIRE" />
                                        <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/>
                                        </svg>
                                     <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">LOCATAIRE</div>
                                        <p class="text-gray-700 text-base">
                                            LOCATAIRE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-6 pt-4 pb-2">
                                <RaisedButton 
                                label="Envoyer"
                                primary={true}
                                onClick={this.continue}
                                />
                            </div>
                    </React.Fragment>
                </MuiThemeProvider>

                <Formulaire />

                <div>
                    <h1> Type De Logement </h1>
                    <form action="/type-de-logement" method="post">
                        <div class="proprietaire">
                            <label for="proprietaire"> Propriétaire</label>
                        </div>

                        <div class="locataire">
                            <label for="locataire"> Locataire</label>
                        </div>
                    </form>
                </div>

                <div>
                    <p class="text-5xl">The quick brown fox ...</p>

                </div>

            </div>

        )
    }
}

export default TypeDeLogement
