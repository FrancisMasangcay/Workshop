import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  button: {
    "&:hover": {
      backgroundColor: "#2d3238",
      color: "white",
    },
    backgroundColor: "#ffffff",
    color: "black",
    border: "2px solid black",
    margin: "auto 2rem auto 0",
  },
  navbar: {
    backgroundColor: "#71abf0 ",
    position: "sticky",
  },
});

class MyNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Button to="/" className={classes.button} component={Link}>
            Home
          </Button>
          <Button to="/todos" className={classes.button} component={Link}>
            Todos
          </Button>
          <Button to="/assignments" className={classes.button} component={Link}>
            Assignments
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MyNavbar);
