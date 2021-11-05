import React from "react";
import Navbar from "./compnents/nav";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Addflight from "./compnents/addflight";
import Showflights from "./compnents/showflights";
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
		
		</Router>
);
}

export default App;
