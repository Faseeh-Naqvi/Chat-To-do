import React from "react";
import { AppBar,Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";



//tunary operator on line 16, if user is or is not logged in. Displays different things
const Header = () => {
  const auth = useAuth();
  return <AppBar sx={{bgcolor: "transparent", position: "static" , boxShadow: "none"}}>
    <Toolbar sx={{display:"flex"}}> 
    <Logo/> 
    
    <div>{auth?.isLoggedIn? <> 
    <NavLink background="#00fffc" to="/chat" text="Go To Chat" textColor="black" />
    <NavLink background="#51538f" textColor="white" to="/" text="Logout" onClick={auth.logout}/>
    </> : <>
    
    <NavLink background="#00fffc" to="/login" text="Login" textColor="black" />
    <NavLink background="#51538f" textColor="white" to="/signup" text="Signup"/>
    
    
    </> }</div>
    </Toolbar>

  </AppBar> ;
}

export default Header;