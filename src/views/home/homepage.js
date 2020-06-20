import React, { Component } from "react";
import { Parallax } from "react-parallax";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// components
import ListSection from "../../components/ListArea/ListSection";
import SearchSection from "../../components/SearchArea/SearchSection";
// import categoryItems from "../../util/items";
// MUI stuff
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  ...theme.home,
});

const parallaxStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const paperStyles = {
  background: "#FFFFFF",
  position: "relative",
  zIndex: "3",
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow:
    "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};
class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../../assets/img/landing-bg.jpg")}
          bgImageAlt="taawa"
          strength={200}
        >
          <div className={classes.container}>
            <Grid container className={classes.grid}>
              <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                <h1 className={classes.title}>Ask TAAWA</h1>
                <h4>
                TAAWA - Technology Adoption Advisory Web Application aims to connect African governments, organizations and entrepreneurs with the most approriate software programs germane to attaining optimal effieciency of operations in their various field in hopes of achieving the Industry, Infrastructure and Innovation SDG goal.
                </h4>
              </Grid>
            </Grid>
           
          </div>
        </Parallax>
        <div style={paperStyles}>
          <div className={classes.container}>
          <SearchSection />
          <ListSection />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
