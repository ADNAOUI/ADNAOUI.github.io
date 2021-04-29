//----- MODULES -----//
import React, { Component } from 'react';

//----- COMPOSANTS -----//
//import ResourceCard from '../ClassComponents/ResourceCard.js';
import ResourceContainer from '../views/ResourceContainer.js';

//----- STYLES -----//
import '../index.css';
import '../assets/css/view/AccueilContainer.css';

class AccueilContainer extends Component {

  render(){
    return(
      <div>
          <ResourceContainer />
      </div>
    );
  }
}
export default AccueilContainer;