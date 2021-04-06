import React, {Component} from 'react';
import ResourceCard from '../ClassComponents/ResourceCard.js';
import '../index.css';
import '../assets/css/view/AccueilContainer.css';

export default class AccueilContainer extends Component {

  render(){
    return(
      <section>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
          <ResourceCard/>
      </section>
    );
  }
}