import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return <nav className="Navbar bg-dark container">
<h4><Link to="/">home</Link></h4>
<h4><Link to="/flight/Addflight">addflight</Link></h4>
<h4><Link to="/flight/Showflights">Show Flights</Link></h4>

<<<<<<< Updated upstream
    </nav>
=======
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h2" className={classes.logo}>
          AirLines
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            
            <Link to="/flight/login" className={classes.link}>
              login
            </Link>

            <Link to="/flight/Addflight" className={classes.link}>
              Add Flight
            </Link>
            <Link to="/flight/Showflights" className={classes.link}>
              Show Flights
            </Link>
            <Link to="/flight/search" className={classes.link}>
              Search
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
>>>>>>> Stashed changes
}
export default Navbar;