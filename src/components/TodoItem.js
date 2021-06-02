import { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <>
        {this.props.todos?.length > 0 ? (
          this.props.todos?.map((todo, index) => {
            return (
              <li className="item" key={index}>
                <label htmlFor={todo.id}>
                  <div>
                    <input
                      id={todo.id}
                      name={todo.id}
                      type="checkbox"
                      value={todo.id}
                      checked={todo.completed}
                      onChange={(e) =>
                        this.props.onChange(
                          { ...todo, completed: e.target.checked },
                          e
                        )
                      }
                    />
                    <span>{todo.title}</span>
                  </div>
                  <div className="item__actions">
                    <button onClick={() => this.props.onUpdate(todo.id)}>
                      Update
                    </button>
                    <button onClick={() => this.props.onDelete(todo.id)}>
                      Delete
                    </button>
                  </div>
                </label>
              </li>
            );
          })
        ) : (
          <li>No task</li>
        )}
      </>
    );
  }
}

export default TodoItem;
