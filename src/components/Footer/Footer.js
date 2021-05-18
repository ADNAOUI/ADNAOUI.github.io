import React, {Component} from 'react';
import '../../assets/css/Footer.css';
import { NavLink } from "react-router-dom";
import {Button} from 'react-bootstrap';
//Images
import LogoMs_Lab from '../../assets/img/logoMs_Lab.png';
import Logo_Ministere from '../../assets/img/logoMinistere.png';
import Logo from '../../assets/img/logo/logoSombre.png';

//Icones
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";


export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
      }
      // On vérifie si le route existe ou non
      activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
      }

    render()
    {
        return(
            <footer class="sectionFooter">
                <div>
                    <img src={Logo} class="imgFooter" alt="Logo Ressources Relationnelles"/>
                    <div className="positionSocialIconsFooter">
                        <AiOutlineInstagram/>
                        <IoLogoFacebook/>
                        <AiFillTwitterCircle/>
                    </div>
                    <div className="positionButtonContactFooter">
                        <Button className="buttonContactFooter">nous contacter</Button>
                    </div>
                    <img src={LogoMs_Lab} class="imgFooter" alt="logo Ms_Lab"/>
                    <img src={Logo_Ministere} class="imgFooter" alt="Logo du ministère"/>
                </div>
                <div>
                    <ul class="positionLienFooter">
                        {this.props.routesFooter.map((prop, key) => {
                            if (prop.redirect) return null;
                                return (
                                    <li
                                        className={
                                            this.activeRoute(prop.layoutFooter + prop.pathFooter) +
                                            (prop.pro ? "active active-pro" : "")
                                        }
                                        key={key}
                                        >

                                        <NavLink
                                                to={prop.layoutFooter + prop.pathFooter}
                                                className="nav-link"
                                                activeClassName="active"
                                        >
                                            <label>{prop.nameFooter}</label>
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                
                <div>
                    <p class="textFooter">&copy; 2021 Ressources Relationnelles Tout droit réservé</p>
                </div>
            </footer>
        );
    }
}
