import React from 'react';
import { NavLink as RRDNavLink, withRouter } from 'react-router-dom';
import uid from 'uid';

import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse
} from 'reactstrap';

import { sidebar as routes } from './../../routes';

class Sidebar extends React.Component {
  getRoutes(routes, isSubMenu = false) {
    return routes
      .filter(route => route.isActive && route.layout === '/admin')
      .map(({ name, path, icon, layout, subMenu = null }, key) => {
        const pathname = `${layout}${path}`;
        const menuToggler = `${name.replace(' ', '')}${uid()}`;

        if ( subMenu != null ) {
          return (
            <NavItem key={key} className={`w-100${isSubMenu ? ' ml-2' : ''}`}>
              <NavLink to={pathname} tag={RRDNavLink} id={menuToggler}>
                <i className={icon}></i>
                <span>{name} <i className="fas fa-caret-down m-0"></i></span>
              </NavLink>
              <UncontrolledCollapse toggler={`#${menuToggler}`}>
                {this.getRoutes(subMenu, true)}
              </UncontrolledCollapse>
            </NavItem>
          );
        }

        return (
          <NavItem key={key} className={`w-100${isSubMenu ? ' ml-2' : ''}`} active={this.isRouteActive(pathname)}>
            <NavLink to={pathname} tag={RRDNavLink}>
              <i className={icon}></i>
              <span>{name}</span>
            </NavLink>
          </NavItem>
        );
      });
  }

  isRouteActive(routePath) {
    return routePath === this.props.location.pathname;
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

export default withRouter(Sidebar);