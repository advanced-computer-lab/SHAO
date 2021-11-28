import React from "react";
import Navbar from "./compnents/nav";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Addflight from "./compnents/addflight";
import Showflights from "./compnents/showflights";
<<<<<<< Updated upstream
=======
import Search from "./compnents/search";
import Login from "./compnents/Login";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
		
=======
		<Route path="/flight/search">
		<Search />
		</Route>
		<Route path="/flight/Login">
		<Login />
		</Route>
>>>>>>> Stashed changes
		</Router>
);
}

export default App;
