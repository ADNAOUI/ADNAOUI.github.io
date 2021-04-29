//----- MODULES -----//
import React, { Component } from 'react';

//----- COMPOSANTS -----//
import CommentsContent from './CommentsContent.js';

//----- STYLES -----//
import '../assets/css/CommentsContainer.css';

class CommentsContainer extends Component {
    render() {
        return (
            <div className="perimetreCommentsContainer">
                <h2 class="comments-title" id="comments">
                    <span>Comments</span>
                </h2>
                <CommentsContent />
            </div>
        );
    }
}
export default CommentsContainer;