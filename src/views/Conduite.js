import React, {Component} from 'react';
import '../index.css';

import '../assets/css/view/About.css';

export default class Conduites extends Component {

  render(){
    return(
      <section>
          <h1 class="titleVisitorSitePresentation">Lignes de Conduites des services de média sociaux</h1>

          <div class="positionTextLoremIpsum">
            {
            Array(102).fill(null).map((_, i) => (
              <p class="pVisitorSitePresentation col-4" key={i}>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here, content here', making it look like readable
              English.
            </p>
            ))
          }
          </div>
      </section>
    );
  }
}