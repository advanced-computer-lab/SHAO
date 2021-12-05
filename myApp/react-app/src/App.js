import React from "react";
import Navbar from "./compnents/nav";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Addflight from "./compnents/addflight";
import Showflights from "./compnents/showflights";
import Search from "./compnents/search";
import Profile from "./compnents/Profile";
import Home from "./compnents/Home";

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
		<Route path="/user/Profile">
		<Profile />
		</Route>
		<Route path="/user/home">
		<Home />
		</Route>

		
		
		</Router>
		
  


  );

}

export default App;
