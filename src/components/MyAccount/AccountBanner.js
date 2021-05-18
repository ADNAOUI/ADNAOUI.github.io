import React, {Component} from 'react';

import testBanniere from "../../assets/img/testBanniere.jpg";

class AccountBanner extends Component {

  render()
  {
    return(
      <section>
        <img src={testBanniere} alt="Banniere"></img>
      </section>
    );
  }
}

export default AccountBanner;