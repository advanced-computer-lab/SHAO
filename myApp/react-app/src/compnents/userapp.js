import React from "react";
import NavbarU from "./usernavbar";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Showresflights from "./showresflights";
import UserSearch from "./UserSearch";
import Profile from "./Profile";

function Appuser() {
return (
	<Router>
		<NavbarU />
		
		
		<Route path="/flight/UserSearch">
		<UserSearch />
		</Route>
		<Route path="/user/Profile">
		<Profile />
		</Route>
		<Route path="/user/Showresflights">
		<Showresflights />
		</Route>
		
		
		</Router>
);
}

export default Appuser;
