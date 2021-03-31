import React, {Component} from 'react';
import ButtonTopNavBar from '../FunctionalComponents/ButtonTopNavBar';
import Logo from '../img/RessourceRelationnelle_LogoFondFonceCut.png';
import '../Css/TopNavBar.css';

class TopNavBar extends Component {
    render(){
        return(
        <div class="backgroundTopNavBar row col-12">
            <div class="logo">
                <img src={Logo} class="imgTopNavBar"/>
            </div>
            <div class="col-7"></div>
            <div class="buttonLogInTopNavBar col-1">
                <ButtonTopNavBar text="Connexion"/>
            </div>
            <div class="buttonRegistrationTopNavBar">
                <ButtonTopNavBar text="Inscription" onclick={}/>
            </div>
        </div>
        );
    }
}

export default TopNavBar;