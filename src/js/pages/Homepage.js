import React from "react";
import Login from "../pages/Login"
import Register from "../pages/Register"

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true, 
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }

  render() {
    return (
      <div>
        <div>
              <nav class="navbar navbar-inverse navbar-fixed-top">
                  <div class="container">
                      <ul class="nav navbar-nav">
                            <li>
                              <p class="navbar-text titlephr"><b>Welcome to PHR</b></p>
                            </li>
                            <li>
                              <a  class="navbar-text nav-buttons" onClick={this._onButtonClick}><b>Login</b></a>
                            </li>
                            <li>
                              <a class="navbar-text nav-buttons" onClick={this._onButtonClick}><b>Register</b></a>
                            </li>
                    </ul>
                  </div>
              </nav>
          </div>
          <div class="row">
            <div class="contentpanel col-md-6 col-md-offset-4">
              {this.state.showComponent ?
                 <Login /> :
                 <Register />
              }
            </div>
          </div>
      </div>
    );
  }
}
