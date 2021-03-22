import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ButtonTopNavBar.css';
import {Button} from 'react-bootstrap';

export default function ButtonInscription (props) {
    return(
        <Button class="buttonInscription btn btn-button" >{props.text}</Button>
    );
}
