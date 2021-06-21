
import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

    function App() {
      return (
        <>
          <NavBar/>
          <Container>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About} />
            </Switch>
          </Container>
        </>
      );
    }
    
    export default App;