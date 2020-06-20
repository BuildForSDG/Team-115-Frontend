import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import menuItems from "../../util/menuItems.json";
// dropdown tree
import DropdownTreeSelect from "react-dropdown-tree-select";
// MUI stuff
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Chip from "@material-ui/core/Chip";

const styles = (theme) => ({
  ...theme.search,
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    width: 250,
    maxWidth: 300,
  },
  list: {
    width: 250,
  },
  button: {
    margin: theme.spacing(2),
    minWidth: 120,
    height: 50,
    width: 250,
    maxWidth: 300,
  },
});

export class SearchSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (currentNode, selectedNodes) => {
    console.log("path::", currentNode.path);
  };

  assignObjectPaths = (obj, stack) => {
    Object.keys(obj).forEach((k) => {
      const node = obj[k];
      if (typeof node === "object") {
        node.path = stack ? `${stack}.${k}` : k;
        this.assignObjectPaths(node, node.path);
      }
    });
  };

  render() {
    const { classes } = this.props;
    this.assignObjectPaths(menuItems);

    return (
      <Grid container>
        <Grid item sm>
          <form noValidate onSubmit={this.handleSubmit}>
            <div className={classes.root}>
              <DropdownTreeSelect
                data={menuItems}
                onChange={this.onChange}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                //   disabled={loading}
              >
                Search solutions
                {/* {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )} */}
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    );
  }
}

SearchSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchSection);
