
import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";

    function App() {
      return (
        <>
          <NavBar/>
          <Container>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Container>
        </>
      );
    }
    
    export default App;