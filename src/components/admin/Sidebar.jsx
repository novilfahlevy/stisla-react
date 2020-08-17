import React from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { sidebar as routes } from './../../routes';

class Sidebar extends React.Component {
  getRoutes(routes) {
    return routes
      .filter(route => route.isActive)
      .map(({ name, path, icon, layout }) => {
        return (
          <NavItem className="w-100">
            <NavLink to={`${layout}${path}`} tag={RRDNavLink}>
              <i className={icon}></i>
              <span>{name}</span>
            </NavLink>
          </NavItem>
        );
      });
  }

  render() {
    return (
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="/">Stisla</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="/">St</a>
          </div>
          <Nav className="sidebar-menu">
            {this.getRoutes(routes)}
          </Nav>
        </aside>
      </div>
    );
  }
}

export default Sidebar;