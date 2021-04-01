import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import resourcesImg from '../assets/img/resourcesImg.png';
import resourceCardAvatar from '../assets/img/resourceCardAvatar.png';
import heartIcon from '../assets/img/heartIcon.png';
import commentIcon from '../assets/img/commentIcon.png';
import shareIcon from '../assets/img/shareIcon.png';
import starIcon from '../assets/img/starIcon.png';
import '../assets/css/classComponents/ResourceCard.css';

export default class ResourceCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            //ressources: []resourcesImg
            identifiantRessource         : '',
            identifiantCategorieRessource: ["Communication", "Soi"],
            titreRessource               : 'Titre de la Ressource sur une ou deux lignes si titre long',
            imageRessource               : '',
            contenuRessource             : '',
            nombreLikeRessource          : 0,
            partageRessource             : '',
            nombrePartageRessource       : 0,
            nombreCommentaireRessource   : 0,
            etatRessource                : [],
            datePrePublicationRessource  : new Date(),
            datePublicationRessource     : new Date(),
            pseudonymeMembreResourceCard : 'John Doe',
            professionMembreResourceCard : 'Développeur informatique',
            visible                      : true
        };
    }

    componentDidMount(){
        /* axios.get("http://localhost:8055/items/ressources")
        .then(res => {
            const ressources = res.data;
            this.setState({ressources});
        })*/
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div id="resourceCard" class="resourceCard">
                <div id="lbl_publicationResourceCard" class="col-12 lbl_publicationResourceCard">
                    <span id="span_publicationResourceCard" class="span_publicationResourceCard">publié le : <strong>{this.state.datePublicationRessource.toLocaleDateString()}</strong></span>
                </div>
                
                <Card style={{borderRadius: 0, borderTopRightRadius: 20, borderColor:"#3FCCFF", borderWidth: 2, shadow:50}}>
                <hr/>
                    <Card.Body style={{padding: 10, backgroundColor: "#292929", borderTopRightRadius: 18}}>
                        <div class="row titleResourceCard">
                            <Card.Title><strong>{this.state.titreRessource}</strong></Card.Title>
                        </div>
                        <div class="row contentPictureResourceCard">
                            <Card.Img style={{alignItems: 'center'}} src={resourcesImg}/>
                        </div>
                        <div class="row col-12 BadgeResourceCard">
                            <Badge variant="primary">{this.state.identifiantCategorieRessource[0]}</Badge>
                            <Badge variant="secondary">{this.state.identifiantCategorieRessource[1]}</Badge>
                        </div>
                        <div class="row col-12 ProfilPictureResourceCard">
                            <Card.Img style={{width: '40px'}} src={resourceCardAvatar}/>
                            <span class="span_PseudonymeMembreResourceCard"><strong>{this.state.pseudonymeMembreResourceCard}</strong></span>
                            <span class="span_ProfessionMembreResourceCard">{this.state.professionMembreResourceCard}</span>
                        </div>
                    </Card.Body>
                    <Card.Footer class="FooterResourceCard">
                        <div class="row col-12 iconResourceCard">
                            <span><IconStatResourceCard name={heartIcon} number={this.state.nombreLikeRessource}/></span>
                            <span><IconStatResourceCard name={commentIcon} number={this.state.nombreCommentaireRessource}/></span>
                            <span><IconStatResourceCard name={shareIcon} number={this.state.nombrePartageRessource}/></span>
                            <span><IconStatResourceCard name={starIcon}/></span>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

function IconStatResourceCard(props){
    return(
        <div>
        <Card.Img src={props.name}/>
        <span>{props.number}</span>
        </div>
    )
}