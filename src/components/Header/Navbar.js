import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
// MUI stuff
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// Icons

const styles = (theme) => ({
  ...theme.header,
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography
            variant="h4"
            color="inherit"
            component={Link}
            to="/"
            className={classes.title}
          >
            Taawa
          </Typography>
          <Typography variant="subtitle2" className={classes.typo}>
            Blog{" "}
          </Typography>
          <Typography variant="subtitle2" className={classes.typo}>
            Contact
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
