import React, { Component } from 'react';
import '../index.css';

import '../assets/css/view/Tendances.css';
import ButtonVisitorSitePresentation from '../FunctionalComponents/ButtonVisitorSitePresentation';
import { Button } from 'react-bootstrap';

//Icons
import { MdNewReleases } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";


export default class Tendances extends Component {

  render() {
    return (
      <section>
        <h1 class="titleVisitorSitePresentation">Tendances des services de média sociaux</h1>

        <div class="col-12">
          <div className="parentButtonTendances">
            <Button>Nouveautés<MdNewReleases /></Button>
            <Button>Les plus likés<AiOutlineHeart /></Button>
            <Button>Articles<RiArticleLine /></Button>
            <Button>Vidéos<BsCameraVideo /></Button>
            <Button>Jeux<IoGameControllerOutline /></Button>
          </div>
        </div>
      </section>
    );
  }
}

