//----- MODULES -----//
import React, { Component } from 'react';

//----- COMPOSANTS -----//
import CommentsContent from './CommentsContent.js';
class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <h2 class="comments-title" id="comments">
                    <span>Comments</span>
                </h2>
                <CommentsContent />
            </div>
        );
    }
}

export default CommentsContainer;