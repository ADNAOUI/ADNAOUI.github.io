import React, {useState, Component} from 'react';
import {Form, Modal, InputGroup, FormControl} from 'react-bootstrap';
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
                <ButtonAddRessource text="Ajouter une Ressource"/>
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

function ButtonAddRessource(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <button class="btn-button custom-btn buttonAddResource buttonAddResourceTransition icon_AddResource" onClick={handleShow}><span>{props.text}</span></button>
            <div class="contenuModaleAddResource">
                <Modal style={{fontFamily: 'Roboto'}} show={show} onHide={handleClose}>
                    <Modal.Header closeButton style={{backgroundColor: '#F7F7F7', color:'#707070'}}>
                        <h1>Ajouter une ressource</h1>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor:'#F7F7F7', color:'#707070'}}>
                        <Form.Group controlId="formAddResources">
                            <Form.Label>
                                <Form.Control type="text" placeholder="Entrez un titre"/>
                            </Form.Label>
                            <div class="sous-titre">CATEGORIES</div>
                            <div class="categorieAddResource">
                            <Form.Label controlId="categories" class="categorieAddResource">
                                <CategorieAddResource text="Communication"/>
                                <CategorieAddResource text="Ami"/>
                            </Form.Label>
                            </div>
                            <div class="sous-titre">TYPE DE RELATIONS</div>
                            <div class="typeRelationsAddResource">
                            <Form.Label controlId="categories" class="categorieAddResource">
                                <CategorieAddResource text="Communication"/>
                                <CategorieAddResource text="Ami"/>
                            </Form.Label>
                            </div>
                            <div class="sous-titre">TYPE DE RESSOURCES</div>
                            <div class="typeRessourceAddResource">
                            <Form.Label controlId="categories" class="categorieAddResource">
                                <CategorieAddResource text="Communication"/>
                                <CategorieAddResource text="Ami"/>
                            </Form.Label>
                            </div>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text style={{backgroundColor:'#E04980', color:'white'}}>Contenu</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer style={{backgroundColor:'#F7F7F7'}}>
                        <input type="submit" class="btn_ValiderAddResource" onClick="{handleClose}" value="Valider"/>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

function CategorieAddResource(props){
    // handleClick = (e) => {
    //     e.preventDefault();
    //     console.log('le lien click');
    // }

    return(
        <div class="badge_AddResource">
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check class="cb_AddResource" type="checkbox" label={props.text}/>
            </Form.Group>
        </div>
    )
}