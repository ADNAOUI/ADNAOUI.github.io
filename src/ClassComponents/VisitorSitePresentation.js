import TopNavBar from '../ClassComponents/TopNavBar';
import Footer from '../ClassComponents/Footer';
import React, {Component} from 'react';
import '../Css/VisitorSitePresentation.css';
import SocialMediaServicesRR from '../img/socialMediaServicesRR.png';
import ButtonVisitorSitePresentation from '../FunctionalComponents/ButtonVisitorSitePresentation';

class VisitorSitePresentation extends Component {

  render(){
    return(
      <div class="backgroundVisitorSitePresentation">
        <TopNavBar />
        <div class="container col-12">

          <div class="row col-5">
            <h1 class="titleVisitorSitePresentation">Services de média sociaux</h1>
            <img src={SocialMediaServicesRR} class="imgVisitorSitePresentation"/>
          </div>

          <div class="row col-3">
            <p class="pVisitorSitePresentation">
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of using 
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable 
              English.
            </p>
          </div>

          <div class="row link col-12">
            <a href="/" class="linkVisitorSitePresentation col-1">Présentation</a>
            <ButtonVisitorSitePresentation text="Visiter" class="col-1"/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default VisitorSitePresentation;