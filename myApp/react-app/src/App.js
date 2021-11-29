import React from "react";
import Navbar from "./compnents/nav";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Addflight from "./compnents/addflight";
import Showflights from "./compnents/showflights";
import Search from "./compnents/search";
import UserSearch from "./compnents/UserSearch";
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
		
		</Router>
);
}

export default App;
