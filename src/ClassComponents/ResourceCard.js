//----- MODULES -----//
import React, { Component } from 'react';
import { Card }             from 'react-bootstrap';
import Axios                from 'axios';

//----- MULTIMEDIAS -----//
import resourcesImg         from '../assets/img/resourcesImg.png';
import resourceCardAvatar   from '../assets/img/resourceCardAvatar.png';
import heartIcon            from '../assets/img/heartIcon.png';
import commentIcon          from '../assets/img/commentIcon.png';
import shareIcon            from '../assets/img/shareIcon.png';
import starIcon             from '../assets/img/starIcon.png';

//----- STYLES -----//
import '../assets/css/view/ResourceCard.css';

class ResourceCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            //----- STATES BdD -----//
            ressources                  : Array.from({ length: 10 }),

            //----- STATES LOCALES -----//
            nombreCommentaireRessource  : 0,
            nombrePartageRessource      : 0,
            nombreLikeRessource         : 0,
            pseudonymeMembreResourceCard: 'John Doe',
            professionMembreResourceCard: 'Développeur informatique',
            visible                     : true,
        };
    }

    componentDidMount(){
        Axios ({
            method: 'get',
            url: 'http://localhost:8055/items/ressources',
            responseType: 'json',
            params : {
                limit: 999999999
            }
        }).then(response => {
            const ressources = response.data.data
            this.setState({ressources});
        });
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div id="resourceCard" className="resourceCard">
                <div id="lbl_publicationResourceCard" className="col-12 lbl_publicationResourceCard">
                    <span id="span_publicationResourceCard" className="span_publicationResourceCard">publié le : <strong>15/05/2020</strong></span>
                </div>

                <div className="cardRessource">
                <hr/>
                <div className="cardBody">
                    <Card.Body style={{padding: 10, backgroundColor: "#F7F7F7", borderTopRightRadius: 18}}>
                        <div className="row titleResourceCard">
                            <Card.Title><strong className="tailleTitreCardRessources">{this.state.titreRessource}</strong></Card.Title>
                        </div>
                        <div className="row contentPictureResourceCard">
                            <Card.Img style={{alignItems: 'center'}} src={resourcesImg}/>
                        </div>
                        <div className="colorCardBadge">
                            <span className="badgeRessourceCard" variant="primary">1</span>
                            <span className="badgeRessourceCard" variant="secondary">2</span>
                            <span className="badgeRessourceCard" variant="secondary">3</span>
                        </div>
                        <div className="row ProfilPictureResourceCard">
                            <Card.Img style={{width: '40px'}} src={resourceCardAvatar}/>
                            <span className="span_PseudonymeMembreResourceCard"><strong>{this.state.pseudonymeMembreResourceCard}</strong></span>
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