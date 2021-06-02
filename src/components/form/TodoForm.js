import React, { Component } from "react";
import { connect } from "react-redux";

class TodoForm extends Component {
  render() {
    return (
      <>
        <form
          className="form"
          onSubmit={
            this.props.type === "UPDATE"
              ? (e) => this.props.onSubmit({ ...this.props.values }, e)
              : this.props.onSubmit
          }
        >
          <div>
            <label htmlFor="title">Title</label>
            <div>
              <input
                id="title"
                value={this.props.values?.title}
                required
                onChange={this.props.setValues}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <div>
              <input
                id="description"
                value={this.props.values?.description}
                required
                onChange={this.props.setValues}
              />
            </div>
          </div>
          {this.props.type === "NEW" && (
            <button type="submit">Add To Do</button>
          )}
          {this.props.type === "UPDATE" && (
            <button type="submit">Update To Do</button>
          )}
        </form>
      </>
    );
  }
}
const mapStateToProps = (response) => ({});

export default connect(mapStateToProps)(TodoForm);
