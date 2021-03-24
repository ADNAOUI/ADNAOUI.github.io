import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

// le core des components
import LeftNavBar from "../components/LeftNavBar/LeftNavBar.js";
import Footer from "../components/Footer/Footer.js";
import TopNavBar from "../components/TopNavBar/TopNavBar.js";

import routes from "../routes.js";

export default class Layouts extends React.Component {

  render() {
    return (
      <main>
        <TopNavBar {...this.props} />

        <LeftNavBar
           {...this.props}
          routes={routes}
        />

        <div ref={this.mainPanel}>
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
            <Redirect from="/ressources_relationnelles" to="/ressources_relationnelles/accueilContainer" />
          </Switch>
        </div>

        <Footer />
      </main>
    );
  }
}

