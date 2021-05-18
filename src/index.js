import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Layouts from "./layouts/Layouts.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/ressources_relationnelles" render={(props) => <Layouts {...props} />} />
      <Redirect to="/ressources_relationnelles/accueil" />
    </Switch>
  </Router>,
  document.getElementById('root')
);