import React from "react";
import PerfectScrollbar from "perfect-scrollbar";

import { Route, Switch, Redirect } from "react-router-dom";

// le core des components
import LeftNavBar from "../components/LeftNavBar/LeftNavBar.js";
import Footer from "../components/Footer/Footer.js";
import TopNavBar from "../components/TopNavBar/TopNavBar.js";

import routes from "../routes.js";

var ps;

export default class Accueil extends React.Component {
  state = {
    backgroundColor: "blue",
  };
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <main>
        <TopNavBar {...this.props} />

        <LeftNavBar
           {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
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
            <Redirect from="/ressources_relationnelles" to="/ressources_relationnelles/accueil" />
          </Switch>
        </div>

        <Footer/>
      </main>
    );
  }
}

