import React from "react";
import NavbarR from "./navreg";
import { BrowserRouter as Router,Redirect,Route } from "react-router-dom";
import Showresflights from "./showresflights";
import UserSearch from "./UserSearch";
import Profile from "./Profile";
import Home from "./Home";
import SignUp from "./SignUp.js";
import SignIn from "./login";
import GShowflights from "./guestshowflights";
import Help from "./help";
import { useState } from "react";


function Registapp() {

return (


	<Router>

{/* <Redirect to={"/home"}></Redirect> */}
		<NavbarR />

		
		<Route path="/Profile">
		<Profile />
		</Route>
		<Route path="/guestshowflights">
		<GShowflights />
		</Route>
		<Route path="/home">
		<Home />
		</Route>
		<Route path="/SignUp">
		<SignUp />
		</Route>
		<Route path="/SignIn">
		<SignIn />
		</Route>
		<Route path="/help">
		<Help />
		</Route>
		</Router>
		);
}

export default Registapp;
