//----- MODULES -----//
import React, { Component } from 'react'

//----- STYLES -----//
import '../assets/css/OverlayInfo.css'

class OverlayInfo extends Component {
    render() {
        return (
            <div className="perimetreOverlayInfo">
                <div className="overlayInfo Rubrique">
                    <div>
                        <label>Type de ressource :</label>
                    </div>
                    <div>
                        <label>Relations :</label>
                    </div>
                    <div>
                        <label>Catégorie :</label>
                    </div>
                </div>

                <div className="overlayInfo Informations">
                    <div>
                        <label>Auteur :</label>
                    </div>
                    <div>
                        <label>Nombre de publications :</label>
                    </div>
                    <div>
                        <label>Date de publications :</label>
                    </div>
                </div>

            </div>
        );
    }
}

export default OverlayInfo;