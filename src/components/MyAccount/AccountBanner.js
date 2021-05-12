import React, {Component} from 'react';

import testBanniere from "../../assets/img/testBanniere.jpg";



export default class About extends Component {

  render()
  {
    return(
      <section>
        <img src={testBanniere} alt="Banniere"></img>
      </section>
    );
  }
}