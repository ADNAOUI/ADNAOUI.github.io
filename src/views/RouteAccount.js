//*--- MODULES
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//*--- COMPOSANTS
import Aperçu from './Aperçu.js';
import Galerie from './Galerie.js';
import Favoris from './Favoris.js';
import Ressources from './Ressources.js';
import APropos from './APropos.js';
import Statistiques from './Statistiques.js';

class RouteAccount extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="_2IzNv">
                        <Link className="_3rUER" to="/ressources_relationnelles/aperçu">Aperçu</Link>
                        <Link className="_3rUER" to="/ressources_relationnelles/galerie">Galerie</Link>
                        <Link className="_3rUER" to="/ressources_relationnelles/favoris">Favoris</Link>
                        <Link className="_3rUER" to="/ressources_relationnelles/ressources">Ressources</Link>
                        <Link className="_3rUER" to="/ressources_relationnelles/apropos">À propos</Link>
                        <Link className="_3rUER" to="/ressources_relationnelles/statistiques">Statistiques</Link>
                    </div>

                    <div>
                        <Route path="/ressources_relationnelles/aperçu" component={Aperçu}/>
                        <Route path="/ressources_relationnelles/galerie" component={Galerie}/>
                        <Route path="/ressources_relationnelles/favoris" component={Favoris}/>
                        <Route path="/ressources_relationnelles/ressources" component={Ressources}/>
                        <Route path="/ressources_relationnelles/apropos" component={APropos}/>
                        <Route path="/ressources_relationnelles/statistiques" component={Statistiques}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default RouteAccount;