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

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      addedTodo: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.addedTodo !== "") {
      let newTodos = this.state.todos;
      newTodos.push(this.state.addedTodo);
      this.setState({
        todos: newTodos,
        addedTodo: "",
      });
    }
  };

  removeTodo = (toRemove) => {
    let newTodos = this.state.todos;
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i] === toRemove) {
        newTodos.splice(i, 1);
      }
    }
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="page-content-wrapper">
          <ul>
            {this.state.todos.map((todo) => {
              return (
                <li>
                  <div className="grid">
                    <div>{`${todo}`}</div>
                    <Button
                      className={classes.button}
                      onClick={() => this.removeTodo(todo)}
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
          <h2>Add A New Todo</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              name="addedTodo"
              value={this.state.addedTodo}
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

export default withStyles(styles)(Todos);
