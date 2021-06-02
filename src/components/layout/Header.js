import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="page__header">
        User: {this.props.currentUser?.username}
        <div className="page__header-button">
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Footer;
