import React from "react";
  import {activity} from 'react-icons-kit/feather/activity';
  import { Icon } from 'react-icons-kit';
import { IndexLink, Link } from "react-router";

export default class ProviderProfileBar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <p class="navbar-text"><b>Dr. Hahn</b></p>
              </li>
              <li>
                <p class="navbar-text"><b>PR0</b></p>
              </li>
              <li>
                <p class="navbar-text"><b>General Practitioner</b></p>
              </li>
              <li>
                <p class ="navbar-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </li>
              <li>
                <p class="navbar-text navbar-right"><b>Logout</b></p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
