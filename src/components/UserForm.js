import React, { Component } from 'react';
import EspacesAIsoler from './EspacesAIsoler.js';
import TypeDeLogement from './TypeDeLogement.js'; 
import LieuDuLogement from './LieuDuLogement'
// import de 01_TypeDeLogement car appelé dans le render

export class UserForm extends Component {
/**
 * Etape initiale à 1 pour type de logement
 */

    state = {
        step: 1,
        nom: '',
        prenom: '',
        codePostal: '',
        nbDOccupants: '',
        revenusFiscaux: '',
        email: '',
        numeroTel: ''
    }
    // Proceed to next step
    // Méthode pour passer à l'étape suivante
    nextStep = () => {
        const { step } = this.state;
        alert('etape avant nextStep '+step);
        this.setState({
            step: step + 1
        });
        alert('etape apres nextStep '+step);
    }

    // Go back  to previous step
    // Méthode pour passer à l'étape précédente
    previousStep = () => {
        const { step } = this.state;
        alert('etape avant previousStep '+step);

        this.setState({
            step: step - 1
        });
        alert('etape apres previousStep '+step);
    }

    // Handle fields change
    // Gérer le changement des champs

    saisieChamps = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { nom, prenom, codePostal, nbDOccupants, revenusFiscaux, email, numeroTel } = this.state;
        const values = { nom, prenom, codePostal, nbDOccupants, revenusFiscaux, email, numeroTel };
       
        switch(step){
            case 1:
                return (
                    <TypeDeLogement
                        nextStep={this.nextStep}
                        saisieChamps={this.saisieChamps}
                        values={values}
                    />
                )
            case 2:
                return (
                    <EspacesAIsoler 
                    nextStep={this.nextStep}
                        saisieChamps={this.saisieChamps}
                        values={values}
                    />
                )
                
            case 3:
                return (
                    <LieuDuLogement 
                    nextStep={this.nextStep}
                        saisieChamps={this.saisieChamps}
                        values={values}
                    />
                )
            case 4:
                return <h1>04_NbDoccupants</h1>
            case 5:
                return <h1>05_RevenusFiscaux</h1>
            case 6:
                return <h1>UserFormDetails</h1>
            case 7:
                return <h1>Confirmation</h1>
        }
    }
}

export default UserForm
