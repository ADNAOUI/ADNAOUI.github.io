import React, { useState, Component } from 'react';
import { Button, Form, Modal} from 'react-bootstrap';

//CSS
import '../../assets/css/TopNavBar.css';

//Images, Icones
import { FaQuestion } from 'react-icons/fa';
import Logo from '../../assets/img/RessourceRelationnelle_LogoFondFonceCut.png';

export default class TopNavBar extends Component {
    render()
    {
        return (
            <div class="backgroundTopNavBar">
                <img src={Logo} class="imgTopNavBar" alt="ressourcesRelationnelles" />

                <div class="positionButtonConnexionInscription">

                    <ButtonInscription/>

                    <ButtonConnexion text="Se Connecter" />
                    <InterrogationPoint />
                </div>
            </div>
        );
    }
}

function ButtonInscription() {
    const [indexTabs , setIndexTabs] = useState(1);
    const indexTabsContent = (index) => {
            setIndexTabs(index);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button class="buttonInscription" onClick={handleShow}>S'inscrire</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title class={indexTabs === 1 ? 'activeContent' : 'content'}>S'inscrire a RE</Modal.Title>
                    <Modal.Title class={indexTabs === 2 ? 'activeContent' : 'content'}>Se connecter a RE</Modal.Title>
                    <div class="positionBoutonInscriptionConnexion" >
                        <a class={indexTabs === 1 ? 'activeText col-6' : 'col-6 btnTopNavBarInsCon'} onClick={() =>  indexTabsContent(1) }>S'inscrire </a>
                        <a class={indexTabs === 2 ? 'activeText col-6' : 'col-6 btnTopNavBarInsCon'} onClick={() =>  indexTabsContent(2) }>Se connecter </a>
                    </div>
                </Modal.Header>

                <Modal.Body className={indexTabs === 1 ? 'activeContent' : 'content'}>
                    <Form>
                        <Form.Group controlId="formInscriptionPseudo">
                            <Form.Label>
                                Pseudonyme
                            </Form.Label>
                                <Form.Control  type="text" placeholder="Entrez un pseudonyme"/>
                        </Form.Group>

                        <Form.Group  controlId="formInscriptionName">
                            <Form.Label >
                                Nom
                                </Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre nom"/>
                        </Form.Group>
                        <Form.Group  controlId="formInscriptionPrenom">
                            <Form.Label >
                                Prénom
                                </Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre prénom"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de naissance</Form.Label>
                                <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group controlId="formInscriptionEmail">
                            <Form.Label >
                                E-mail
                            </Form.Label>
                                <Form.Control type="email" placeholder="Entrez une adresse mail valide" />
                        </Form.Group>
                        <Form.Group controlId="formInscriptionPassword">
                            <Form.Label >
                                Mot de passe
                            </Form.Label>
                            <Form.Control type="password" placeholder="Choissisez un mot de passe " />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                    must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group  controlId="formInscriptionPasswordConfirm">
                            <Form.Label >
                                Confirmez votre mot de passe
                            </Form.Label>
                            <Form.Control type="password" placeholder="Confirmer un mot de passe " />
                        </Form.Group>
                        En cliquant sur s'inscrire ,vous reconnaissez avoir lu et approuvé  les <a>Conditions d'utilisations</a> et la <a>Politique de confidentialité</a> .
                    </Form>
                </Modal.Body>

                <Modal.Body className={indexTabs === 2 ? 'activeContent' : 'content'}>
                    <Form>
                        <Form.Group  controlId="formConnexionID">
                            <Form.Label >
                                Identifiant
                            </Form.Label>
                                <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group  controlId="formConnexionPassword">
                            <Form.Label >
                                Mot de passe
                                </Form.Label>
                                <Form.Control type="password"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer class={indexTabs === 1 ? 'activeContent' : 'content'}>
                    <div class="btnModal " onClick={handleClose}>S'inscrire</div>
                </Modal.Footer>
                <Modal.Footer class={indexTabs === 2 ? 'activeContent' : 'content'}>
                    <div class="btnModal" onClick={handleClose}>Se Connecter</div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function ButtonConnexion(props) {
    return (
        <button class="leftNavBar-bouton buttonConnexion">{props.text}</button>
    )
}

function InterrogationPoint(props) {
    return (
        <FaQuestion class="interrogationPointTopBar" />
    )
}