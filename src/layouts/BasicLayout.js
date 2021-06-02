import React from "react";
import { connect } from "react-redux";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import "../styles/HomePage.css";

class BasicLayout extends React.Component {
  logout = (e) => {
    e.preventDefault();
    const { history } = this.props.children.props;
    document.cookie = "authorization=";
    history.push("/login");
  };
  render() {
    const children = this.props.children;
    return (
      <div className="page">
        <Header currentUser={this.props.currentUser} logout={this.logout} />
        <div className="page__container">{children}</div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  currentUser: response.currentUser.response,
});

export default connect(mapStateToProps)(BasicLayout);
