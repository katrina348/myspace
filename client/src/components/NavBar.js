import React from "react";
import { Link} from "react-router-dom"

const NavBar =()=>{
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/things'>Things</Link>
      <Link to='/physicians'>Physicians</Link>
      <Link to='/patients'>Patients</Link>
      <Link to='/appointments'>Appointments</Link>
    </div>
  );
}

export default NavBar