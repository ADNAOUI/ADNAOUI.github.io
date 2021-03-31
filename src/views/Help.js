import React, {Component} from 'react';
import {CardGroup,Card } from 'react-bootstrap'
import {Link} from 'react-router-dom';
//CSS
import '../index.css';
import '../assets/css/view/Help.css';

//Images
import aboutUsHelp  from '../assets/img/Help/aboutUs.png';
import conditionsHelp from '../assets/img/Help/conditions.png';
import conduitesHelp from '../assets/img/Help/conduites.png';
import cookiesHelp from '../assets/img/Help/Cookies.png';
import faqHelp from '../assets/img/Help/FAQ.png';


export default class Help extends Component {

  render(){
    return(
      <section>
        <h1 class="titleVisitorSitePresentation">Aide des services de média sociaux</h1>
        <CardGroup>
        <div class="positionCardParentHelp col-12">
          <div class="positionCardHelp">
          <Link to="/ressources_relationnelles/faq">
            <Card.Img variant="top" src={faqHelp} class="imgCardposition" />
            <Card.Body class="contenuBodyCardHelp">
              <Card.Title class="titreCardHelp">FAQ</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Link>
          </div>
          <div class="positionCardHelp">
            <Link to="/ressources_relationnelles/politicalCookies">
              <Card.Img variant="top" src={cookiesHelp} class="imgCardposition"/>
              <Card.Body class="contenuBodyCardHelp">
                <Card.Title class="titreCardHelp">Politique de Cookies</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Link>
          </div>
          <div class="positionCardHelp">
            <Link to="/ressources_relationnelles/conduite">
              <Card.Img variant="top" src={conduitesHelp} class="imgCardposition"/>
              <Card.Body class="contenuBodyCardHelp">
                <Card.Title class="titreCardHelp">Ligne de Conduites</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Link>
          </div>
        </div>

        <div class="positionCardParentHelp col-12">
          <div class="positionCardHelp">
            <Link to="/ressources_relationnelles/about">
              <Card.Img variant="top" src={aboutUsHelp} class="imgCardposition"/>
              <Card.Body class="contenuBodyCardHelp">
                <Card.Title class="titreCardHelp">A propos</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Link>
          </div>
          <div class="positionCardHelp">
            <Link to="/ressources_relationnelles/conditions">
              <Card.Img variant="top" src={conditionsHelp} class="imgCardpositionConditions"/>
              <Card.Body class="contenuBodyCardHelp">
                <Card.Title class="titreCardHelp">Conditions</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              </Link>
          </div>
        </div>
        </CardGroup>
      </section>
    );
  }
}