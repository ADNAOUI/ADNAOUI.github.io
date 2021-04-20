import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

// le core des components
import LeftNavBar from "../components/LeftNavBar/LeftNavBar.js";
import Footer from "../components/Footer/Footer.js";
import TopNavBar from "../components/TopNavBar/TopNavBar.js";
import ResourceContainer from "../views/ResourceContainer.js";

import routes from "../routes.js";
import routesFooter from "../routesFooter.js";
import routesRessource from "../routesRessource.js";

export default class Layouts extends React.Component {

  render() {
    return (
      <main>
        <TopNavBar {...this.props} />

        <LeftNavBar
           {...this.props}
          routes={routes}
        />

        <ResourceContainer {...this.props} routesRessource={routesRessource}/>

        <div>
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/ressources_relationnelles" to="/ressources_relationnelles/accueil" />
          </Switch>

          <Switch>
            {routesFooter.map((prop, key) => {
              return (
                <Route
                  path={prop.layoutFooter + prop.pathFooter}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/ressources_relationnelles" to="/ressources_relationnelles/accueil" />
          </Switch>

          <Switch>
            {routesRessource.map((prop, key) => {
              return (
                <Route
                  path={prop.layoutRessouce + prop.pathRessource}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/ressources_relationnelles" to="/ressources_relationnelles/accueil" />
          </Switch>
        </div>

        <Footer {...this.props}
          routesFooter={routesFooter}/>
      </main>
    );
  }
}

