import React from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import testImage from "../assets/img/imgOne.jpg";
import DocIcon from "../assets/img/documentsIcon.png";
import '../assets/css/view/MonCompte.css';
import ResourceCard from "../ClassComponents/ResourceCard.js";  
import AccountBanner from "../components/MyAccount/AccountBanner.js";
import { Component } from "react";


export default class MonCompte extends Component {

 

    
   
    render(){
        return (
      
            <Router>
               
              <div>
        
              <section>       
                 <div class="row" ><AccountBanner /></div>
        
                <div class="row accountnavbar" >
                <nav>
                  <ul>
                    <li>
                      <Link to="/ressources_relationnelles/">Home</Link>
                    </li>
                    
                    <li>
                      <Link to="/ressources_relationnelles/favoris">Favoris</Link>
                    </li>
                    <li>
                      <Link to="/ressources_relationnelles/createdressources">Ressources </Link>
                    </li>
                    <li>
                      <Link to="/ressources_relationnelles/aboutaccount">A propos</Link>
                    </li>
                  </ul>
                </nav>
                </div>
               
                        
                 
                </section>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    
                 
                  <Route path="/ressources_relationnelles/aboutaccount">
                    <AboutAccount />
                  </Route>
                  <Route path="/ressources_relationnelles/createdressources">
                    <CreatedRessources />
                  </Route>
                  <Route path="/ressources_relationnelles/">
                    <Account />
                  </Route>
                
                 
                  
                </Switch>
              </div>
            </Router>
            
          );
        }
}

 class CreatedRessources extends Component{
    constructor(props){
        super(props);
       this.state ={

            userRessources: [],
            
            
        }
    }
    

    

     componentDidMount(){
        
        axios.get(`http://localhost:8055/items/ressources`)
            .then(res => {
                const userRessources = res.data.data;
                this.setState({userRessources});
            });
    }

    render(){
        console.log("toto" + this.state.userRessources); 
    return (
        <section>
            
            <div class="RessourcesAwait"> 
                <h1>Ressources en attente</h1> 
                    <div>
                        
                      {this.state.userRessources.map(userRessource =>  <ResourceCard  test={userRessource} />)} 
                           
                    </div>  
            </div>
            
            <div class="ValidateRessources" >
        
                <h1>Ressources validées</h1> 
        
                <div>
                
                </div> 
            </div>
        </section>
    );
}
}

function AboutAccountPreview() {
        
        
    return (
        <article>
             <h1>A propos de </h1> 
             <div  class="AboutAccountPreview"> 
             <p>
                 Mar 30        Chateauroux              Inscris depuis le 11/03/2021         06 69 96 66 99 
             </p>

             <h3>Mes réseaux sociaux</h3>
            <p>
               icones de réseaux sociaux 
            </p>

            <h3>Ma biographie</h3>
            <p>Blabla
                blabla
            </p>
               
        </div>

        </article>
            
            
    )
}

function FavoritesRessourcesAccountPreview() {
    return (
        <article>
            <h1>Aperçu ressources favorites</h1> 
            <div class="FavoritesRessourcesAccountPreview" >
            
            
            <div>
            
            </div>
         
        </div>

        </article>
        
        
    )
}

function RessourcesAccountPreview() {
    return (
        <article>
            <h1>Aperçu ressources crées</h1>
            <div class="RessourcesAccountPreview">
                
            </div>
        </article>
               
                
            
                
       
    )
}

function ImagesAccountPreview() {
    return (
        <div class="ImagesAccountPreview">
               <h1>Galerie d'images </h1> 
               <div>
                 <img src={testImage} class="galleriePreview" alt="test image 1"></img>
                <img src={testImage} class="galleriePreview" alt="test image 2"></img>
                <img src={testImage} class="galleriePreview" alt="test image 3"></img>
                <img src={testImage} class="galleriePreview" alt="test image 4"></img> 
               </div> 
     
        </div>
    )
}

function DocumentsAccountPreview() {
    return (
        <div class="ImagesAccountPreview">
               <h1>Documents récents </h1> 
               
               <div>
                 <img src={DocIcon} class="galleriePreview" alt="test image 5"></img>
                <img src={DocIcon} class="galleriePreview" alt="test image 6"></img>
                <img src={DocIcon} class="galleriePreview" alt="test image 7"></img>
                <img src={DocIcon} class="galleriePreview" alt="test image 8"></img> 
               </div>  
                
                     
        </div>
    )
}

function Account() {
  return <section>
       <div class="row">
                <div class="col-md-4"><AboutAccountPreview /></div>
                <div class="col-md-8"><FavoritesRessourcesAccountPreview /></div>            
         </div>  
               
          <div class="row"><RessourcesAccountPreview/></div>  
          <div class="row"><ImagesAccountPreview /></div>  
          <div class="row"><DocumentsAccountPreview />  </div>  
  </section>;
}

function  AboutAccount() {

    return (        
    <section>
           
            <div class="ProfilPicture"> 
            <img src={DocIcon} class="galleriePreview" alt="test image 5"></img>
                 <h2>Nom</h2>
                <h3>Métier</h3>                  
            </div>

            

            <div class="BiographySection">
               <h1>Ma biographie</h1> 
                <p>
                 Petite description rapide           
                </p>
             </div>
        
        

        <div class="FavoritesRessourcesAccountPreview" >
            
            <h2>Me suivre</h2> 
            
            <div>
                #Réseaux sociaux

                
            </div> 
        </div>

    <div class="StatisticSession">
            
               <h1> Statistiques </h1>
               <div>
                
               <div>
                    <span>
                        Nombre de Likes : 
                    </span>
                    <span>
                        Nombre de Commentaires : 
                    </span>
                </div> 
            </div>
                
        </div>
        
        <div class="NumberOfLikesSection">
               <h1>Vos Likes :</h1> 
               
               <div>
               
               </div>  
                
                     
        </div>
        <div class="CommentsSection">
               <h1>Vos Commentaires :</h1> 
               
               <div>
                    <h1>Titre Commentaire</h1>
                    <p>
                        commentaires bla bla
                    </p>
               </div>  
        </div>
        </section>
    );
}



function GallerieImages() {
    return (
        <section>
            <h2>Galerie d'images</h2>
            <div>
                 <img src={DocIcon} class="galleriePreview" alt="test image 5"></img>
                <img src={DocIcon} class="galleriePreview" alt="test image 6"></img>
                <img src={DocIcon} class="galleriePreview" alt="test image 7"></img>
                <img src={DocIcon} class="galleriePreview" alt="test image 8"></img> 
               </div> 
        </section>
    )
}


