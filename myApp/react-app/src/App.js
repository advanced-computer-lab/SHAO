import React from "react";
import Navbar from "./compnents/nav";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Addflight from "./compnents/addflight";
import Showflights from "./compnents/showflights";
import Showresflights from "./compnents/showresflights";
import Search from "./compnents/search";
import UserSearch from "./compnents/UserSearch";
import Profile from "./compnents/Profile";
function App() {
return (
	<Router>
		<Navbar />
		
		<Route path="/flight/Addflight">
		<Addflight />
		</Route>
		<Route path="/flight/Showflights">
		<Showflights />
		</Route>
		<Route path="/flight/search">
		<Search />
		</Route>
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

export default App;
