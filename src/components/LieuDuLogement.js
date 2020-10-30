import moduleName from 'module';

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Formulaire from './Formulaire';
import TypeDeLogement from './TypeDeLogement';


export class LieuDuLogement extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep(); // A l'étape suivante
    }

    retour = e => {
       // e.preventDefault();
        this.props.previousStep(); // A l'étape d'avant -->
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
                    <AppBar title=" Lieu du logement " />
                   
                    <br/>

                        <div class="px-6 pt-4 pb-2">
                            <RaisedButton 
                            label="Retour"
                            primary={true}
                            onClick={this.retour}
                            />
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


        </div>


            

        )
    }
}

export default LieuDuLogement