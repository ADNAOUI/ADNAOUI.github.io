import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ButtonVisitorSitePresentation.css';

function ButtonVisitorSitePresentation (props) {
    return (
        <Button>{props.text}</Button>
        );
}

export default ButtonVisitorSitePresentation;