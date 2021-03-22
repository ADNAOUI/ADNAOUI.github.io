import React from 'react';
import Logo from '../../assets/img/RessourceRelationnelle_LogoFondFonceCut.png';
import '../../assets/css/TopNavBar.css';
import {FaQuestion} from 'react-icons/fa';

export default function TopNavBar () {
        return(
        <div class="backgroundTopNavBar">
            <img src={Logo} class="imgTopNavBar" alt="ressourcesRelationnelles"/>

            <div class="positionButtonConnexionInscription">
                <ButtonInscription text="S'Inscrire"/>
                <ButtonConnexion text="Se Connecter"/>
                <InterrogationPoint/>
            </div>
        </div>
        );
}

function ButtonConnexion(props){
    return(
        <button class="leftNavBar-bouton buttonConnexion">{props.text}</button>
    )
}

function ButtonInscription(props){
    return(
        <button class="leftNavBar-bouton  buttonInscription">{props.text}</button>
    )
}

function InterrogationPoint(props){
    return(
        <FaQuestion class="interrogationPointTopBar"/>
    )
}