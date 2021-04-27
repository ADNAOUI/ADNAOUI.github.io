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
            <div className="perimetreResourceIconBar">
                <div class="icon-bar">
                    <a class="activeClass" href="#"><i class="fa fa-home"><img src={IconAwesomeEyes}/></i></a> 
                    <a href="#"><i class="fa fa-search"><img src={IconBiHeart}/></i></a> 
                    <a href="#"><i class="fa fa-envelope"><img src={IconStar}/></i></a> 
                    <a href="#"><i class="fa fa-globe"><img src={IconComments}/></i></a>
                    <a href="#"><i class="fa fa-trash"><img src={IconShare}/></i></a> 
                </div>
            </div>
        );
    }
}

export default ResourceIconBar;