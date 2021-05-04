//----- MODULES -----//
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Axios from 'axios';

//----- COMPOSANTS -----//
import ResourceContainer from '../views/ResourceContainer.js';
import ResourceCard from './ResourceCard.js';

//----- STYLES -----//
import '../assets/css/view/AccueilContainer.css';

class AccueilContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      //----- STATES BdB -----//
      ressources : [],

      //----- STATES LOCALES -----//
      page: 1
    }
  }

  fetchData = (pageNum) => {
    // Axios ({
    //   method: 'get',
    //   url: 'http://localhost:8055/items/ressources',
    //   responseType: 'json',
    // }).then(response => {
    //     const ressources = response.data.data
    //     this.setState({ressources});
    //     console.log(ressources)
    // });
    let ressourceUrl = 'http://localhost:8055/items/ressources?page=' + pageNum;
    console.log(ressourceUrl);
    console.log(pageNum);

    fetch (ressourceUrl)
      .then(response => response.json())
      .then(data => {
          this.setState({
            ressources: [...this.state.ressources, [data]]
          })
          console.log(data)
      })
  }

  infiniteScroll = () => {
    //Bas de page atteint ?
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      let newPage = this.state.page;
      newPage ++;

      this.setState({
        page: newPage
      })

      this.fetchData(newPage);
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.infiniteScroll);
    this.fetchData (this.state.page);
}

  render(){
    return(
      <div>
        <BrowserRouter>
          <div className="div_ResourceContainer">
          {/*AFFICHER toutes les ressources cards de la BdD*/}
            {this.state.ressources.map((ressourceData, index) => (
              <Link to="/ressources_relationnelles/resourcecontainer">#{index}<ResourceCard key={index} ressource={ressourceData}/></Link>
            ))}
            {/* <ul className="ul_ResourceContainer">
                {this.state.ressources.map(ressource => <li><Link to="/ressources_relationnelles/resourcecontainer"><ResourceCard /></Link></li>)}
            </ul> */}
          </div>

          <div className="div_ResourceContent">
            <Route path="/ressources_relationnelles/resourcecontainer" component={ResourceContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default AccueilContainer;