import React from 'react';
import ButtonTopNavBar from '../FunctionalComponents/ButtonTopNavBar';
import Logo from '../img/RessourceRelationnelle_LogoFondFonce.png';
import '../Css/TopNavBar.css';

class TopNavBar extends React.Component {
    render(){
        return(
        <div class="backgroundTopNavBar row col-12">
            <div class="imgTopNavBar">
                <img src={Logo}/>
            </div>
            <div class="col-7"></div>
            <div class="buttonLogInTopNavBar col-1">
                <ButtonTopNavBar text="Connexion"/>
            </div>
            <div class="buttonRegistrationTopNavBar">
                <ButtonTopNavBar text="Inscription"/>
            </div>
        </div>
        );
    }
}

export default TopNavBar;