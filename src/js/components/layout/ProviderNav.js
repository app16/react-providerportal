import React from "react";
import { IndexLink, Link } from "react-router";

export default class ProviderNav extends React.Component {
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
    //const providerDashboardClass = location.pathname === "/" ? "active" : "";
    const providerDashboardClass = location.pathname.match(/^\/dashboard2/) ? "active" : "";
    const providerPermissionClass = location.pathname.match(/^\/permission2/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default fixedtop2" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={providerDashboardClass}>
                <Link to="dashboard2" onClick={this.toggleCollapse.bind(this)}>Dashboard</Link>
              </li>
              <li class={providerPermissionClass}>
                <Link to="permissions2" onClick={this.toggleCollapse.bind(this)}>Permissions</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}