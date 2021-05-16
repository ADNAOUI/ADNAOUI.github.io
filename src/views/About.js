import React, { Component } from 'react';
import '../index.css';

import '../assets/css/view/About.css';
import LogoMs_Lab from '../assets/img/logoMs_Lab.png';


export default class About extends Component {

  render() {
    return (
      <section>
        <h1 class="titleVisitorSitePresentation">Lignes de Conduites des services de média sociaux</h1>
        <div class="positionTextLoremIpsum">
          {
            Array(20).fill(null).map((_, i) => (
              <div key={i}>

                <div class="parentPositionElementAbout">
                  <div class="col-2">
                    <img src={LogoMs_Lab} class="" alt="logo Ms_Lab" />
                  </div>
                  <div class="col-10">
                    <p class="pVisitorSitePresentation">
                      It is a long established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The point of using
                      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      as opposed to using 'Content here, content here', making it look like readable
                      English.
                    </p>
                  </div>
                </div>
                <div class="parentPositionElementAbout">
                  <div class="col-10">
                    <p class="pVisitorSitePresentation">
                      It is a long established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The point of using
                      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      as opposed to using 'Content here, content here', making it look like readable
                      English.
                    </p>
                  </div>
                  <div class="col-2">
                    <img src={LogoMs_Lab} class="" alt="logo Ms_Lab" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}