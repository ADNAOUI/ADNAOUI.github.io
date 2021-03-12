import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/ButtonTopNavBar.css';
import {Button} from 'react-bootstrap';

function ButtonTopNavBar (props) {
    return(
        <Button>{props.text}</Button>
    );
}

export default ButtonTopNavBar;