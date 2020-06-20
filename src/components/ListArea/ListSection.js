import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
// Icons
import ChatIcon from "@material-ui/icons/Chat";
// import grey500 from "@material-ui/styles/colors";

export class ListSection extends Component {
  style = {
    height: "70px",
    padding: "20px",
    marginBottom: "10px",
    borderLeft: "5px solid #033f48",
  };
  Totalstyle = {
    background: "",
    padding: "10px",
    display: "flex",
  };

  render() {
    return (
      <div style={{ marginTop: 1 + "em" }}>
        <div style={{ marginTop: 1 + "em" }}>
          <Paper zdepth={3} style={this.style}>
            <div style={{ display: "inline-block" }}>
              <div>Solution 1</div>
              <div>
                <span
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    paddingLeft: "2px",
                  }}
                >
                  <i>Company Name, Inc</i>
                </span>
              </div>
            </div>
            <div
              style={{
                float: "right",
                paddingRight: "50px",
                color: "rgb(105, 164, 226)",
              }}
            >
              Other details
            </div>
          </Paper>
          <Paper zdepth={3} style={this.style}>
            <div style={{ display: "inline-block" }}>
              <div>Solution 2</div>
              <div>
                <span
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    paddingLeft: "2px",
                  }}
                >
                  <i>Company Name, Inc</i>
                </span>
              </div>
            </div>
            <div
              style={{
                float: "right",
                paddingRight: "50px",
                color: "rgb(105, 164, 226)",
              }}
            >
              Other details
            </div>
          </Paper>
          <Paper zdepth={3} style={this.style}>
            <div style={{ display: "inline-block" }}>
              <div>Solution 3</div>
              <div>
                <span
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    paddingLeft: "2px",
                  }}
                >
                  <i>Company Name, Inc</i>
                </span>
              </div>
            </div>
            <div
              style={{
                float: "right",
                paddingRight: "50px",
                color: "rgb(105, 164, 226)",
              }}
            >
              Other details
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default ListSection;
