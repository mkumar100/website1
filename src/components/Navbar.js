import React, {Component} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Grid,
  Box
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: "10px",//theme.spacing(10),
    display: "flex",
    width:"100%",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: "20px",//theme.spacing(20),
    width:"100%", 
    //"&:hover": {
      //color: "yellow",
      //borderBottom: "1px solid white",
    //},
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" sx={{bgcolor:"white", width:"100%"}}>
      <CssBaseline />
      <Toolbar>
      <Grid container spacing={2}>
  <Grid item xs={1}>
  <Box
            component="img"
            alt="The house from the offer."
            src={require("../images/avanade.png")}
          />
  </Grid>
  <Grid item xs={2}>
    
  </Grid>
  <Grid item xs={8}>
  <div className={classes.navlinks}>
            <Link to="/solutions" className={classes.link}>
              SOLUTIONS
            </Link>
            <Link to="/industries" className={classes.link}>
              INDUSTRIES
            </Link>
            <Link to="/tech" className={classes.link}>
              TECHNOLOGIES AND CAPABILITIES
            </Link>
            <Link to="/client" className={classes.link}>
              CLIENT STORIES
            </Link>
            <Link to="/thinking" className={classes.link}>
              THINKING
            </Link>
            <Link to="/careers" className={classes.link}>
              CAREERS
            </Link>
            <Link to="/careers" className={classes.link}>
              ABOUT AVANADE
            </Link>
          </div>
  </Grid>
  <Grid item xs={1}>
  <Box/>
  </Grid>
</Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
