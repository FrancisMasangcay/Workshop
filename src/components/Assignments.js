import React, { Component } from "react";

//MUI components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  button: {
    fontSize: "1rem",
    border: "solid 2px black",
    margin: "0 0 0 .5rem",
  },
});
class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      assignments: [],
      addedAssignment: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.addAssignment !== "") {
      let newAssignments = this.state.assignments;
      newAssignments.push(this.state.addedAssignment);
      this.setState({
        assignments: newAssignments,
        addedAssignment: "",
      });
    }
  };

  removeAssignment = (toRemove) => {
    let newAssignments = this.state.assignments;
    console.log("Called rmv");
    for (let i = 0; i < newAssignments.length; i++) {
      if (newAssignments[i] === toRemove) {
        newAssignments.splice(i, 1);
      }
    }
    this.setState({
      assignments: newAssignments,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="page-content-wrapper">
          <ul>
            {this.state.assignments.map((assignment) => {
              return (
                <li>
                  <div className="grid">
                    <div>{`${assignment}`}</div>
                    <Button
                      className={classes.button}
                      onClick={() => this.removeAssignment(assignment)}
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="page-content-wrapper">
          <h2>Add A New Assignment</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              name="addedAssignment"
              value={this.state.addedAssignment}
              placeholder="..."
              onChange={this.onChange}
            ></input>
            <Button type="submit" className={classes.button}>
              Add
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Assignments);
