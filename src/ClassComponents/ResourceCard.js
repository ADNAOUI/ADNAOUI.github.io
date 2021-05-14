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
            membres                   : props.tableMembres,
            membre                    : props.membre,
            profils                   : [],
            imagesRessources          : [],

            //------ RESSOURCES
            // ID_RESSOURCE              : props.tableRessources.ID_RESSOURCE,
            // TITRE_RESSOURCE           : props.tableRessources.TITRE_RESSOURCE,
            // DATE_PUBLICATION_RESSOURCE: props.tableRessources.DATE_PUBLICATION_RESSOURCE,
            // IMAGE_RESSOURCE           : props.tableRessources.IMAGE_RESSOURCE,

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
            url: 'https://randomuser.me/api/',
            responseType: 'json',
        }).then(response => {
            this.setState({ profils: [...this.state.profils, ...response.data.results] });
        });
        Axios({
            method: 'get',
            url: 'https://picsum.photos/v2/list',
            responseType: 'json',
            params: {
                limit: 9999
            }
        }).then(response => {
            this.setState({ imagesRessources: [...this.state.imagesRessources, ...response.data] });
        });
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div id="resourceCard" className="resourceCard">
                <div id="lbl_publicationResourceCard" className="col-12 lbl_publicationResourceCard">
                    <span id="span_publicationResourceCard" className="span_publicationResourceCard">publié le : <strong>{this.props.tableRessources.DATE_PUBLICATION_RESSOURCE}</strong></span>
                </div>

                <div className="cardRessource">
                    <hr/>
                    <div className="cardBody">
                        <Card.Body style={{padding: 10, backgroundColor: "#F7F7F7", borderTopRightRadius: 18}}>
                            <div className="row titleResourceCard">
                                <Card.Title><strong className="tailleTitreCardRessources">{this.props.tableRessources.TITRE_RESSOURCE}</strong></Card.Title>
                            </div>
                            <div className="row contentPictureResourceCard">
                                <Card.Img
                                    style={{alignItems: 'center'}}
                                    src={this.state.imagesRessources.map(imagesRessource => imagesRessource.download_url)} alt=""/>
                            </div>
                            <div className="colorCardBadge">
                                <span className="badgeRessourceCard" variant="primary">{this.props.tableRessources.DESIGNATION_CATEGORIE_RESSOURCE}</span>
                                <span className="badgeRessourceCard" variant="secondary">{this.props.tableRessources.DESIGNATION_TYPE_RESSOURCE}</span>
                                <span className="badgeRessourceCard" variant="secondary">{this.props.tableRessources.DESIGNATION_TYPE_RELATION}</span>
                            </div>

                            <div className="row ProfilPictureResourceCard">
                                <Card.Img
                                    style={{width: '40px'}}
                                    src={this.state.profils.map(profil => profil.picture.medium)} />

                                <span className="span_PseudonymeMembreResourceCard"><strong>{this.state.profils.map(profil => profil.name.first)}</strong></span>
                                <span className="span_ProfessionMembreResourceCard">{this.props.tableRessources.PROFESSION_MEMBRE}</span>
                            </div>
                        </Card.Body>
                    </div>
                    <Card.Footer className="FooterResourceCard">
                        <div className="row iconResourceCard">
                            <span><IconStatResourceCard name={heartIcon} number={this.props.tableRessources.NOMBRE_LIKE}/></span>
                            <span><IconStatResourceCard name={commentIcon} number={this.props.tableRessources.NOMBRE_COMMENTAIRE}/></span>
                            <span><IconStatResourceCard name={shareIcon} number={this.props.tableRessources.NOMBRE_PARTAGE}/></span>
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