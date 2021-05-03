//----- MODULES -----//
import React, { Component } from 'react';

//----- COMPOSANTS -----//
import ResourceContainer from '../views/ResourceContainer.js';

//----- STYLES -----//
import '../assets/css/view/AccueilContainer.css';

class AccueilContainer extends Component {

  render(){
    return(
      <div>
          <ResourceContainer />
      </div>
    )
  }
}
export default AccueilContainer;