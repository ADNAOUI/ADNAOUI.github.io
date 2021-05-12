import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import ResourceCard from "../../ClassComponents/ResourceCard.js";  
  import MonCompte from '../../views/MonCompte.js';

export default class AccountNavbar extends Component{
   

    render()
    {
        return(
            <Router>
                <div>
                    <nav>
                         <ul>
                             <li>
                                <Link to="/">Home</Link>
                             </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/created">Ressources crées</Link>
                             </li>
                             <li>
                                 <Link to="/favorites">Ressources favorites</Link>
                            </li>
                            <li>
                                 <Link to="/picturegallery">Galerie d'images</Link>
                            </li>
                        </ul>
                    </nav>

                         {/* A <Switch> looks through its children <Route>s and
                         renders the first one that matches the current URL. */}
             <Switch>
                <Route path="/about">
                    <AboutAccount />
                </Route>
                <Route path="/picturegallery">
                    <PictureGallery/>
                </Route>
                <Route path="/">
                    <MonCompte />
                </Route>
                <Route path="/created">
                    <CreatedRessources />
                </Route>
                <Route path="/favorites">
                    <FavoritesRessources />
                </Route>
             </Switch>
            </div>
    </Router>

                
           
        );
    }


    
}

function  AboutAccount() {

    return (        
    <section>
           
            <div class="ProfilPicture"> 
                 <h2>Nom</h2>
                <h3>Métier</h3>                  
            </div>

            

            <div class="BiographySection">
               <h1>Ma biographie</h1> 
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                 Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.              
                </p>
             </div>
        
        

        <div class="FavoritesRessourcesAccountPreview" >
            
            <h1>Me suivre</h1> 
            
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
                    <ResourceCard />
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

function CreatedRessources() {
    return (
        <section>
            
            <div class="RessourcesAwait"> 
                <h1>Ressources validées</h1> 
                    <div>
                        <ResourceCard /> 
                        <ResourceCard />
                        <ResourceCard />
                        <ResourceCard />   
                    </div>  
            </div>
            
            <div class="ValidateRessources" >
        
                <h1>Ressources validées</h1> 
        
                <div>
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                </div> 
            </div>
        </section>
    );
}


function FavoritesRessources() {
    return (
        <section>
            
             <h1>Ressources favorites</h1>
            <div>
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
        </section>
    )
}


function GallerieImages() {
    return (
        <section>
            
             Galerie d'images 
        </section>
    )
}
