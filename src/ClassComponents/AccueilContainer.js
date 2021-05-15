//*----- MODULES -----//
import React, { Component }           from 'react';
import { Link } from 'react-router-dom';
import Axios                          from 'axios';

//*----- COMPOSANTS -----//
import ResourceCard                   from './ResourceCard.js';

//*----- STYLES -----//
import '../assets/css/view/AccueilContainer.css';

/**
 *  @class AccueilContainer est la première page que les utilisateurs verront. Elle est également la page de redirection par défaut.
 *                          Elle gère l'ensemble des ressources publiées.
 **/
class AccueilContainer extends Component {
  //*----- INSTANCIATION -----//
  constructor(props) {
    super(props);
    this.state = {
      /**--- DETAILS VARIABLES
       *  @property {array}   ressources   Données de la table 'ressources' de l'API
       *  @property {boolean} loading      Comportement du chargement
       *  @property {int}     page         Numéro de page actuelle de l'API
       *  @property {int}     prevY        Numéro de la précédente page
       **/
      //----- STATES BdD
      ressources: [],
      membres   : [],

      //----- STATES LOCALES
      loading   : false,
      page      : 1,
      prevY     : 0
    }
  }

  //*----- FONCTIONS -----//
  /**
   *  @function getRessources contient le code source utilisé pour obtenir les données de l'API.
   *  @param {Int} page contient le numéro de la page actuelle de l'API.
   **/
  getRessources = (page) => {
    this.setState({ loading: true }); //....................................................Démarrage du chargement des données de l'API
    Axios({
      method:       'get',
      url:          `http://localhost:8055/items/ressources?page=${page}&limit=20`, //......URL de l'API avec mise à jour du numéro de la page reçue en paramètre.
      responseType: 'json'
    }).then(response => {
        this.setState({ ressources: [...this.state.ressources, ...response.data.data] }); //Stockage de la réponse de l'API dans le tableau posts
        this.setState({ loading: false }); //...............................................Arrêt du chargement des données de l'API
    })
  }

  /**
   *  @function handleObserver onfigure le numéro de la page en fonction de l'élément cible et mémorise la dernière page en cours de défilement.
   *  @param {IntetersectionObserverEntry object} entities
   *  @param {object} observer
   **/
  handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y; /*Renvoie un objet DOMRect permettant d'avoir la taille d'un élément et sa position par rapport à la fenêtre.
    y est une des ses propriétés décrivant la position de la taille du rectangle en pixel*/
    if(this.state.prevY > y) {
      const lastRessource = this.state.ressources[this.state.ressources.length - 1];
      const curPage = this.state.page + 1;
      this.getRessources(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  /**
   *  @function componentDidMount permet d'exécuter des fonctions une fois les composants chargés.
   **/
  componentDidMount(){
    this.getRessources(this.state.page); //..........................................Envoi du numéro de la page actuelle à mettre à jour
    var options = {
      root: null, //.................................................................Racine à utiliser pour l'intersection
      rootMargin: "0px", //..........................................................Valeur de marge de la racine
      threshold: 1.0 /*..............................................................Seuil de l'écran : valeur utilisée pour déclencher le rappel une fois que la zone de
                                                                                     l'intersection est supérieure ou identique causé par le scroll*/
    };
    this.observer = new IntersectionObserver(this.handleObserver, options); /*.......Observateur d'intersection permettant d'écouter les changements de l'élément cible
                                                                                     (param : Le nom de la fonction de rappel d'observateur, les options supplémentaires,
                                                                                     telles que la racine et le seuil)*/
    this.observer.observe(this.loadingRef);
    Axios({
        method: 'get',
        url: 'http://localhost:8055/items/membres',
        responseType: 'json',
    }).then(response => {
        this.setState({ membres: [...this.state.membres, ...response.data.data] });
    });
  }

  render(){

    //*----- CSS CONDITIONNEL -----//
    /**
     *  @const loadingTextCSS Affiche le message du chargement en fonction de l'état.
     **/
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    return(
      <div>
          <div className="div_ResourceContainer">
            {/*AFFICHER toutes les ressources cards de la BdD*/}
            <ul>
              {this.state.ressources.map((ressource, indexRessource) =>
                <Link to="/ressources_relationnelles/resourcecontainer"><ResourceCard key={indexRessource} tableRessources={ressource} tableMembres={this.state.membres} /></Link>
              )}
            </ul>
          </div>

          <div className="loadingCSS"
               ref={loadingRef => (this.loadingRef = loadingRef)}>
            <span style={loadingTextCSS}>Chargement...</span>
          </div>
      </div>
    )
  }
}
export default AccueilContainer;