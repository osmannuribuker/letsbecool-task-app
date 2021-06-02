import { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "../components/form/TodoForm";
import {
  getTodoAction,
  allTodoAction,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "../actions/todoActions";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
class HomePage extends Component {
  state = {
    todos: [],
    type: "NEW",
    values: { title: "", description: "" },
  };
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(allTodoAction());
    }
  }
  getTodo = (id) => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(
        getTodoAction(id, (response) => {
          this.setState({
            type: "UPDATE",
            values: response,
          });
        })
      );
    }
  };
  setValues = (e) => {
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [e.target.id]: e.target.value,
      },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(
        createTodoAction(this.state.values, () => {
          this.setState({ values: { title: "", description: "" } });
          dispatch(allTodoAction());
        })
      );
    }
  };
  handleUpdate = (todo, e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(
        updateTodoAction(todo, todo.id, () => {
          dispatch(allTodoAction());
          this.setState({
            values: { title: "", description: "" },
            type: "NEW",
          });
        })
      );
    }
  };
  handleDelete = (id) => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(
        deleteTodoAction(id, () => {
          dispatch(allTodoAction());
          this.setState({
            values: { title: "", description: "" },
          });
        })
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Todo</h1>
        {this.state.type === "UPDATE" && (
          <button
            className="container__new-button"
            onClick={() => {
              this.setState({
                type: "NEW",
                values: { title: "", description: "" },
              });
            }}
          >
            New
          </button>
        )}
        <TodoForm
          onSubmit={
            this.state.type === "UPDATE" ? this.handleUpdate : this.handleSubmit
          }
          setValues={this.setValues}
          values={this.state.values}
          type={this.state.type}
        />
        <TodoList>
          {this.props.todos ? (
            <TodoItem
              todos={this.props.todos}
              onChange={this.handleUpdate}
              onDelete={this.handleDelete}
              onUpdate={this.getTodo}
            />
          ) : (
            <p>Error</p>
          )}
        </TodoList>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  todo: response.todo.response,
  todos: response.todos.response,
});

export default connect(mapStateToProps)(HomePage);
