
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

function NavbarR() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h3" className={classes.logo}>
          AirLines
        </Typography>
          <div className={classes.navlinks}>
            <Link  to="/home" className={classes.link}>
              Home
            </Link>
            <Link to="/" className={classes.link}>
              Show Flights
            </Link>     
            <Link style={{ marginRight: '260px'}} to="/" className={classes.link}>
              Help?
            </Link>
            <Link style={{ marginRight: '200px'}} to="/SignIn" className={classes.link}>
              Login
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavbarR;