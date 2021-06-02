import { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../actions/authenticationActions";

import "../styles/LoginPage.css";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  componentDidUpdate() {
    if (this.props.response.login.response?.access) {
      this.setState({ isLogin: true });
    }
  }
  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password,
    };
    this.props.dispatch(loginUserAction(data));
  };

  render() {
    if (this.state.isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="body">
        <div>
          <h4>Welcome</h4>

          <form className="form" onSubmit={this.onHandleLogin}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                placeholder="Please enter your username"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Please enter your password"
              />
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);
