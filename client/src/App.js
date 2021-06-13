
import React from "react";
import "./App.css";
// import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Things from "./pages/Things";

import Physicians from "./pages/Physicians";
import PhysicianShow from "./pages/PhysicianShow";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import PatientShow from "./pages/PatientShow";


    function App() {
      return (
        <>
          <NavBar/>
          {/* <Container> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/things" component={Things} />

              <Route exact path="/physicians" component={Physicians} />
              <Route exact path="/physicians/:id" component={PhysicianShow} />
              <Route exact path="/appointments" component={Appointments} />
              <Route exact path="/patients" component={Patients} />
              <Route exact path="/patients/:id" component={PatientShow} />



            </Switch>
          {/* </Container> */}
        </>
      );
    }
    
    export default App;