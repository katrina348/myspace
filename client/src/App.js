
import React from "react";
import "./App.css";
// import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
    function App() {
      return (
        <>
          <NavBar/>
          {/* <Container> */}
            <Switch>
              <Route exact path="/" component={() => <h1>Home</h1>} />
              <Route exact path="/about" component={() => <h1>About</h1>} />
            </Switch>
          {/* </Container> */}
        </>
      );
    }
    export default App;

