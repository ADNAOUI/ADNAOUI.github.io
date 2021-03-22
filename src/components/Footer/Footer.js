import React, {Component} from 'react';
import '../../assets/css/Footer.css';
import LogoMs_Lab from '../../assets/img/logoMs_Lab.png';
import Logo_Ministere from '../../assets/img/logoMinistere.png';
import Logo from '../../assets/img/logoRessourcesRelationnelles.png';
export default class Footer extends Component{
    render()
    {
        return(
            <footer class="col-md-12 section-footer">
                <div>
                    <img src={LogoMs_Lab} class="imgFooter" alt="logo Ms_Lab"/>
                    <img src={Logo} class="imgFooter" alt="Logo Ressources Relationnelles"/>
                    <img src={Logo_Ministere} class="imgFooter" alt="Logo du ministère"/>
                </div>

                <div>
                    <label class="titleFooter">AIDES</label>
                    <label class="titleFooter">FAQ</label>
                    <label class="titleFooter">A PROPOS</label>
                    <label class="titleFooter">CONDITIONS</label>
                    <label class="titleFooter">POLITIQUES DE COOKIES</label>
                    <label class="titleFooter">LIGNES DE CONDUITES</label>
                </div>

                <div>
                    <p class="textFooter">&copy; 2021 Ressources Relationnelles Tout droit réservé</p>
                </div>
            </footer>
        );
    }
}
