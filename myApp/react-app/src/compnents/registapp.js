import React from "react";
import Navbarreg from "./navbarreg";
import { BrowserRouter as Router,Redirect,Route } from "react-router-dom";
import Showresflights from "./showresflights";
import UserSearch from "./UserSearch";
import Profile from "./Profile";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./login";

function Registapp() {
return (


	<Router>

		<Navbarreg />

		
		<Route path="/Profile">
		<Profile />
		</Route>
		<Route path="/Showresflights">
		<Showresflights />
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
		</Router>
		);
}

export default Registapp;
