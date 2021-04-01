import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import ResourceCard from '../ClassComponents/ResourceCard.js';
import '../index.css';
import '../assets/css/view/AccueilContainer.css';

export default class AccueilContainer extends Component {

  render(){
    return(
      <section>
        <Container fluid class="accueilContainer">
          <ResourceCard/>
        </Container>
      </section>
    );
  }
}