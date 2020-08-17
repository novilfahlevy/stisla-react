import React from 'react';

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Sidebar extends React.Component {
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
            <NavItem className="w-100">
              <NavLink href="/">
                <i className="fas fa-fire"></i><span>Dasbor</span>
              </NavLink>
            </NavItem>
            <NavItem className="w-100">
              <NavLink href="/">
                <i className="fas fa-users"></i><span>Pengguna</span>
              </NavLink>
            </NavItem>
            <NavItem className="w-100">
              <NavLink href="/">
                <i className="fas fa-user-tie"></i><span>Role</span>
              </NavLink>
            </NavItem>
            <NavItem className="w-100">
              <NavLink href="/">
                <i className="fas fa-user-tag"></i><span>Hak Akses</span>
              </NavLink>
            </NavItem>
          </Nav>
        </aside>
      </div>
    );
  }
}

export default Sidebar;