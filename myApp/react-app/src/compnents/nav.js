import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return <nav className="Navbar bg-dark container">
<h4><Link to="/">home</Link></h4>
<h4><Link to="/flight/Addflight">addflight</Link></h4>
<h4><Link to="/flight/Showflights">Show Flights</Link></h4>

    </nav>
}
export default Navbar;