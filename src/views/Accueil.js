import React, {Component} from 'react';
import '../index.css';

import '../assets/css/view/Accueil.css';
import image1 from '../assets/img/imgHome/1.png';
import image2 from '../assets/img/imgHome/2.png';
import image3 from '../assets/img/imgHome/3.png';

export default class Accueil extends Component {

  render(){
    return(
      <section>
        <div>

          <div class="col-12 dispositionImageHome">
            <h1 class="col-6">Enrichissez, développez et créez des relations</h1>
            <img src={image1} class="col-6" alt="premiere image"/>
          </div>

          <div class="col-12 dispositionImageHome">
            <h1 class="col-6 ">Enrichissez, développez et créez vos relations</h1>
            <img src={image2} class="col-6" alt="deuxieme image"/>
          </div>

          <div class="col-12 dispositionBlocHome">
            <span class="col-6">Pourquoi choisir Ressources Relationnelles ?</span>
            <h1 class="col-6">Créez et Consultez tous types de contenus !</h1>
            <div>
              <p class="">blue</p>
              <p class="">red</p>
              <p class="">green</p>
            </div>
          </div>

          <div class="col-12 dispositionImageHome">
            <h1 class="col-6">Enrichissez, développez et créez vos relations</h1>
            <img src={image3} class="col-6" alt="troisieme image"/>
          </div>

        </div>
      </section>
    );
  }
}