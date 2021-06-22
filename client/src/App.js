
import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";


    function App() {
      return (
        <>
          <NavBar/>
            <FetchUser>
              <Container>
                <Switch>
                  <ProtectedRoute exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </Container>
            </FetchUser>
        </>
      );
    }
    
    export default App;