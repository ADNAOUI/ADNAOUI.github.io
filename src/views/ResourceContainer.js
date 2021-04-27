//----- MODULES -----//
import React, { Component } from 'react';

//----- COMPOSANTS -----//
import MediaContent from '../ClassComponents/MediaContent';
import ResourceInfo from '../ClassComponents/ResourceInfo.js';
import ResourceIconBar from '../ClassComponents/ResourceIconBar.js';
import ShareModal from '../ClassComponents/ShareModal.js';
import CommentsContainer from '../ClassComponents/CommentsContainer.js';
import CommentsContent from '../ClassComponents/CommentsContent.js';

//----- STYLES -----//
import '../assets/css/view/ResourceContainer.css';

class ResourceContainer extends Component {
  render() {
    return (
      <section className="perimetreResourceContainer">
        <input
          className="backButton"
          type="button"
          value="retour"
          onClick={History}
        />
        <div class="ligne">
          <MediaContent />
          <ResourceInfo />
        </div>

        <ResourceIconBar />
        <ShareModal />
        <CommentsContainer />
        <CommentsContent />
      </section>
    );
  }
}

export default ResourceContainer;