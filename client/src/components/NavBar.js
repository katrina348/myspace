import React, {useContext} from "react";
import { Link, useLocation } from "react-router-dom"
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar =()=>{
  const {pathname} = useLocation()
  const {authenticated} = useContext(AuthContext)
  const getRightNav = () =>{
    if(authenticated){
      return (
      <Menu.Menu position='right' >
        <Menu.Item>Logout</Menu.Item>
      </Menu.Menu>
      )
    }else{
      return (
        <Menu.Menu position = 'right'>
                <Link to="/register">
          <Menu.Item active={pathname === '/register'}>Register</Menu.Item>
        </Link>
        <Link to="/login">
          <Menu.Item active={pathname === '/login'}>Login</Menu.Item>
        </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item active={pathname === '/'}>Home</Menu.Item>
      </Link>
      {getRightNav()}
    </Menu>
  );
}

export default NavBar