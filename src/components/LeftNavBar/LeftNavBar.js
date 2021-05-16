//*--- MODULES
import React, { useState, Component } from 'react';
import { Form, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

//*--- COMPOSANTS

//*--- STYLES
import '../../assets/css/LeftNavBar.css';
import '../../assets/css/view/ResourceCard.css';

export default class LeftNavBar extends Component{
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
        this.state = {
            ressources : []
        }
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
                                        {prop.name}
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
    const type = '';

    const categorieValue = '';

    //Fonction POST
    const handleClickCategorie = (props) => {
        categorieValue = props.Test.value;
        console.log(categorieValue);
    }

    const [Title, setTitle] = useState('');
    console.log("Title : ", Title);
    const [Categorie, setCategorie] = useState('');
    const [TypesRessources, setTypeRessources] = useState('');
    const [TypesRelations, setTypesRelations] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var form = event.target
        var myRadioInput = form.elements.categorie.value
        console.log("radioValue : ", myRadioInput);
    }

    return(
        <div>
            <button class="btn-button custom-btn buttonAddResource buttonAddResourceTransition icon_AddResource" onClick={handleShow}><span>{props.text}</span></button>
            <div class="contenuModaleAddResource">
                <Modal style={{left: -300, fontFamily: 'Roboto'}} show={show} onHide={handleClose}>
                    <Modal.Header closeButton style={{width: 1200, backgroundColor: '#F7F7F7', color:'#707070'}}>
                        <h1>Ajouter une ressource</h1>
                    </Modal.Header>
                    <Modal.Body style={{width: 1200, backgroundColor:'#F7F7F7', color:'#707070'}}>
                        <Form.Group controlId="formAddResources" onSubmit={handleSubmit}>
                            <Form.Label>
                                <Form.Control name="Title" type="text" placeholder="Entrez un titre" onChange={event => setTitle(event.target.value)}/>
                            </Form.Label>

                            <div className="zoneCategorie">
                                <h4>CATEGORIES</h4>
                                <div className="categorieContainer">
                                    <div className="colorCardBadge2">
                                        <input id="Communication" name="categorie" type="radio" value="Communication"/>
                                        <label for="Communication" className="badgeRessourceCard3">Communication</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Cultures" name="categorie" type="radio" value="Cultures"/>
                                        <label for="Cultures" className="badgeRessourceCard3">Cultures</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Developpement_personnel" name="categorie" type="radio" value="Développement personnel"/>
                                        <label for="Developpement_personnel" className="badgeRessourceCard3">Développement personnel</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Intelligence_emotionnelle" name="categorie" type="radio" value="Intelligence émotionnelle"/>
                                        <label for="Intelligence_emotionnelle" className="badgeRessourceCard3">Intelligence émotionnelle</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Loisirs" name="categorie" type="radio" value="Loisirs"/>
                                        <label for="Loisirs" className="badgeRessourceCard3">Loisirs</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Monde_professionnel" name="categorie" type="radio" value="Monde professionnel"/>
                                        <label for="Monde_professionnel" className="badgeRessourceCard3">Monde professionnel</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Parentalité" name="categorie" type="radio" value="Parentalité"/>
                                        <label for="Parentalité" className="badgeRessourceCard3">Parentalité</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Qualite_de_vie" name="categorie" type="radio" value="Qualité de vie"/>
                                        <label for="Qualite_de_vie" className="badgeRessourceCard3">Qualité de vie</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Recherche_de_sens" name="categorie" type="radio" value="Recherche de sens"/>
                                        <label for="Recherche_de_sens" className="badgeRessourceCard3">Recherche de sens</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Sante_physique" name="categorie" type="radio" value="Santé physique"/>
                                        <label for="Sante_physique" className="badgeRessourceCard32">Santé physique</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Sante_psychique" name="categorie" type="radio" value="Santé psychique"/>
                                        <label for="Sante_psychique" className="badgeRessourceCard32">Santé psychique</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Spiritualite" name="categorie" type="radio" value="Spiritualité"/>
                                        <label for="Spiritualite" className="badgeRessourceCard3">Spiritualité</label>
                                    </div>

                                    <div className="colorCardBadge2">
                                        <input id="Vie_affective" name="categorie" type="radio" value="Vie affective"/>
                                        <label for="Vie_affective" className="badgeRessourceCard3">Vie affective</label>
                                    </div>
                                </div>
                            </div>

                            <div className="zoneTypeRessource">
                                <h4>TYPES DE RESSOURCES</h4>
                                <div className="categorieContainer2">
                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Activite" name="categorie3" type="radio" value="Activité"/>
                                        <label for="Activite" className="badgeRessourceCard4">Activité</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Article" name="categorie3" type="radio" value="Article"/>
                                        <label for="Article" className="badgeRessourceCard4">Article</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Carte_defi" name="categorie3" type="radio" value="Carte défi"/>
                                        <label for="Carte_defi" className="badgeRessourceCard4">Carte défi</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Cours_PDF" name="categorie3" type="radio" value="Cours PDF"/>
                                        <label for="Cours_PDF" className="badgeRessourceCard4">Cours PDF</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Atelier" name="categorie3" type="radio" value="Atelier"/>
                                        <label for="Atelier" className="badgeRessourceCard4">Atelier</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Fiche_de_lecture" name="categorie3" type="radio" value="Fiche de lecture"/>
                                        <label for="Fiche_de_lecture" className="badgeRessourceCard42">Fiche de lecture</label>
                                    </div>
                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Jeu_en_ligne" name="categorie3" type="radio" value="Jeu en ligne"/>
                                        <label for="Jeu_en_ligne" className="badgeRessourceCard4">Jeu en ligne</label>
                                    </div>
                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Video" name="categorie3" type="radio" value="Vidéo"/>
                                        <label for="Video" className="badgeRessourceCard4">Vidéo</label>
                                    </div>
                                </div>
                            </div>
                            <div className="zoneTypeRelation">
                                <h4>TYPES DE RELATIONS</h4>
                                <div className="categorieContainer2">
                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Soi" name="categorie2" type="radio" value="Soi"/>
                                        <label for="Soi" className="badgeRessourceCard4">Soi</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Conjoints" name="categorie2" type="radio" value="Conjoints"/>
                                        <label for="Conjoints" className="badgeRessourceCard4">Conjoints</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Famille" name="categorie2" type="radio" value="Famille"/>
                                        <label for="Famille" className="badgeRessourceCard4">Famille</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Professionnelle" name="categorie2" type="radio" value="Professionnelle"/>
                                        <label for="Professionnelle" className="badgeRessourceCard4">Professionnelle</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Amis" name="categorie2" type="radio" value="Amis"/>
                                        <label for="Amis" className="badgeRessourceCard4">Amis</label>
                                    </div>

                                    <div className="colorCardBadge2 colorCardBadge3">
                                        <input id="Inconnus" name="categorie2" type="radio" value="Inconnus"/>
                                        <label for="Inconnus" className="badgeRessourceCard4">Inconnus</label>
                                    </div>
                                </div>
                            </div>

                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text style={{backgroundColor:'#E04980', color:'white'}}>Contenu</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>

                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer style={{width: 1200, backgroundColor:'#F7F7F7'}}>
                        <input type="submit" class="btn_ValiderAddResource" value="Valider"/>
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