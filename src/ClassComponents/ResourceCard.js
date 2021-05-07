//*----- MODULES -----//
import React, { Component } from 'react';
import { Card }             from 'react-bootstrap';
import Axios                from 'axios';

//*----- MULTIMEDIAS -----//
import resourcesImg         from '../assets/img/resourcesImg.png';
import resourceCardAvatar   from '../assets/img/resourceCardAvatar.png';
import heartIcon            from '../assets/img/heartIcon.png';
import commentIcon          from '../assets/img/commentIcon.png';
import shareIcon            from '../assets/img/shareIcon.png';
import starIcon             from '../assets/img/starIcon.png';

//*----- STYLES -----//
import '../assets/css/view/ResourceCard.css';

class ResourceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            //*----- STATES BdD -----//
            //------ MEMBRES
            membres: [],

            //------ RESSOURCES
            ID_RESSOURCE              : props.tableRessources.ID_RESSOURCE,
            TITRE_RESSOURCE           : props.tableRessources.TITRE_RESSOURCE,
            DATE_PUBLICATION_RESSOURCE: props.tableRessources.DATE_PUBLICATION_RESSOURCE,
            IMAGE_RESSOURCE           : props.tableRessources.IMAGE_RESSOURCE,

            //----- STATES LOCALES -----//
            nombreCommentaireRessource: 0,
            nombrePartageRessource    : 0,
            nombreLikeRessource       : 0,
            visible                   : true,
        };
    }

    componentDidMount(){
        Axios({
            method: 'get',
            url: 'http://localhost:8055/items/membres',
            responseType: 'json'
        }).then(response => {
            this.setState({ membres: [...this.state.membres, ...response.data.data] });
        });
    }

    componentWillUnmount(){

    }

    render(){
        console.log("membres :", this.state.membres)
        return(
            <div id="resourceCard" className="resourceCard">
                #{this.state.ID_RESSOURCE}
                <div id="lbl_publicationResourceCard" className="col-12 lbl_publicationResourceCard">
                    <span id="span_publicationResourceCard" className="span_publicationResourceCard">publié le : <strong>{this.state.DATE_PUBLICATION_RESSOURCE}</strong></span>
                </div>

                <div className="cardRessource">
                <hr/>
                <div className="cardBody">
                    <Card.Body style={{padding: 10, backgroundColor: "#F7F7F7", borderTopRightRadius: 18}}>
                        <div className="row titleResourceCard">
                            <Card.Title><strong className="tailleTitreCardRessources">{this.state.TITRE_RESSOURCE}</strong></Card.Title>
                        </div>
                        <div className="row contentPictureResourceCard">
                            <Card.Img style={{alignItems: 'center'}} src={this.state.IMAGE_RESSOURCE} alt=""/>
                        </div>
                        <div className="colorCardBadge">
                            <span className="badgeRessourceCard" variant="primary">1</span>
                            <span className="badgeRessourceCard" variant="secondary">2</span>
                            <span className="badgeRessourceCard" variant="secondary">3</span>
                        </div>
                        <div className="row ProfilPictureResourceCard">
                            <Card.Img style={{width: '40px'}} src={resourceCardAvatar}/>
                            {this.state.membres.map((indexMembre, membre) => <span className="span_PseudonymeMembreResourceCard" key={indexMembre}><strong>{membre.NOM_UTILISATEUR_MEMBRE}</strong></span>)}

                            <span className="span_ProfessionMembreResourceCard">{this.state.professionMembreResourceCard}</span>
                        </div>
                    </Card.Body>
                </div>
                    <Card.Footer className="FooterResourceCard">
                        <div className="row iconResourceCard">
                            <span><IconStatResourceCard name={heartIcon} number={this.state.nombreLikeRessource}/></span>
                            <span><IconStatResourceCard name={commentIcon} number={this.state.nombreCommentaireRessource}/></span>
                            <span><IconStatResourceCard name={shareIcon} number={this.state.nombrePartageRessource}/></span>
                            <span><IconStatResourceCard name={starIcon}/></span>
                        </div>
                    </Card.Footer>
                </div>
            </div>
        );
    }
}

function IconStatResourceCard(props){
    return(
        <div>
        <Card.Img src={props.name}/>
        <span className="span_numberIconResourceCard">{props.number}</span>
        </div>
    )
}

export default ResourceCard;