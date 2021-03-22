import React from 'react';
//import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function TestAxiosApiDirectus() {

/*     state ={
        skills : []
    }

    componentDidMount(){
        axios.get("http://localhost:8055/items/skill")
            .then(res => {
                const skills = res.data;
                this.setState({skills});
            })
    }

    render(){
        return(
            <ul>
                {this.state.skills.map(skill => <li>{skill.name}</li>)}
            </ul>
        )
    } */


        return (
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        );
}

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
