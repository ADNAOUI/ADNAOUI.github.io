import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

//Icons
import { MdNewReleases } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";


//CSS
import '../assets/css/view/Tendances.css';
import '../index.css';

export default class Tendances extends Component {

  render(){
    return(
      <section>
          <h1 class="titleVisitorSitePresentation">Tendances des services de média sociaux</h1>

        <div className="parentButtonTendances">
          <Button>Nouveautés<MdNewReleases/></Button>
          <Button>Les plus likés<AiOutlineHeart/></Button>
          <Button>Articles<RiArticleLine/></Button>
          <Button>Vidéos<BsCameraVideo/></Button>
          <Button>Jeux<IoGameControllerOutline/></Button>
        </div>

      </section>
    );
  }
}