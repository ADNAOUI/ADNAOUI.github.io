import React, {Component} from 'react';
import '../index.css';

import '../assets/css/view/Conditions.css';

export default class Conditions extends Component {

  render(){
    return(
      <section>
      <h1 class="titleVisitorSitePresentation">Lignes de Conduites des services de média sociaux</h1>

      <div class="positionTextConditions">
        {
        Array(102).fill(null).map((_, i) => (
          <p class="pVisitorSitePresentation enfantPostionTextConditions" key={i}>
            Ben si, si c’est l’même volume sonore, on dit "équidistant" [...] S’ils sont équidistants en même temps que nous, on peut repérer le dragon par rapport à une certaine distance. Si le dragon s’éloigne, on s’ra équidistant, mais ça s’ra vachement moins précis et... et pas réciproque.
        </p>
        ))
      }
      </div>
  </section>
    );
  }
}