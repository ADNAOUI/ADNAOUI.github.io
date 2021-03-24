import React, {Component} from 'react';
import '../index.css';

import '../assets/css/view/About.css';

export default class About extends Component {

  render(){
    return(
      <section>
          <h1 class="titleVisitorSitePresentation">About des services de média sociaux</h1>

          <div class="col-12">
            <p class="pVisitorSitePresentation">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here, content here', making it look like readable
              English.
            </p>
          </div>

          <div class="link col-12">
            <a href="/" class="linkVisitorSitePresentation col-1">Présentation</a>
          </div>
      </section>
    );
  }
}