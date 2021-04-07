import React, {useState, Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
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
                    <ButtonAddRessources text="Ajouter une Ressource"/>
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

function ButtonAddRessources(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <button class="btn-button custom-btn buttonAddResources" onClick={handleShow}>{props.text}</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1>Ajouter une ressource</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formAddResources">
                        <Form.Label>
                            <Form.Control type="text" placeholder="Entrez un titre"/>
                        </Form.Label>
                        <Form.Label>
                            <Form.Control type="button" placeholder="économie"/>
                        </Form.Label>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </div>
    )
}