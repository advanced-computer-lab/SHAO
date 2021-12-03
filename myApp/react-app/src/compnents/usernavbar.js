
import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(0), // used to be 10
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
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NavbarU() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h3" className={classes.logo}>
          AirLines
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/user/Showresflights" className={classes.link}>
              Show Reserved Flights
            </Link>     
            <Link to="/flight/UserSearch" className={classes.link}>
              Search
            </Link>
            <Link to="/user/Profile" className={classes.link}>
              Profile
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavbarU;