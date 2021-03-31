import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import '../../assets/css/LeftNavBar.css';
export default class LeftNavBar extends Component{
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
      }
      // On vérifie si le route existe ou non
      activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
      }

    render(){
        return(
            <nav class="LeftNavBar">
                <div class="positionBoutonAjouterRessources">
                    <ButtonAjouterRessources text="Ajouter une Ressource"/>
                </div>
                <ul>
                    {this.props.routes.map((prop, key) => {
                        if (prop.redirect) return null;
                            return (
                                <li
                                    className={
                                        this.activeRoute(prop.layout + prop.path) +
                                        (prop.pro ? "active active-pro" : "")
                                    }
                                    key={key}
                                    >

                                    {prop.textSeparation}

                                    <NavLink
                                            to={prop.layout + prop.path}
                                            className="nav-link"
                                            activeClassName="active"
                                    >
                                        <i>{prop.icon}</i>
                                        <label>{prop.name}</label>
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        );
    }
}

function ButtonAjouterRessources(props){
    return(
        <button class="btn-button custom-btn buttonAjouterRessources">{props.text}</button>
    )
}