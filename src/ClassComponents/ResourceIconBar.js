//----- MODULES -----//
import React, { Component } from 'react'

//----- STYLES -----//
import '../assets/css/ResourceIconBar.css'
import IconAwesomeEyes from '../assets/img/icons/IconAwesomeEyes.png'
import IconBiHeart from '../assets/img/icons/bi_heart.png'
import IconStar from '../assets/img/icons/Vector.png'
import IconComments from '../assets/img/icons/Icon awesome-comments.png'
import IconShare from '../assets/img/icons/bi_share.png'

class ResourceIconBar extends Component {
    render() {
        return (
            <div classNameNameName="perimetreResourceIconBar">
                <div className="icon-bar">
                    <a href="/"><i className="fa fa-home"><img src={IconAwesomeEyes} alt=""/></i></a> 
                    <a href="/"><i className="fa fa-search"><img src={IconBiHeart} alt=""/></i></a> 
                    <a href="/"><i className="fa fa-envelope"><img src={IconStar} alt=""/></i></a> 
                    <a href="/" className="activeClass"><i className="fa fa-globe"><img src={IconComments} alt=""/></i></a>
                    <a href="/"><i className="fa fa-trash"><img src={IconShare} alt=""/></i></a> 
                </div>
            </div>
        );
    }
}

export default ResourceIconBar;