import React from 'react';

import {
  Navbar as RSNavbar,
  // NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Profile from './../../assets/img/avatar/avatar-1.png';

class Navbar extends React.Component {
  render() {
    return (
      <RSNavbar>
        <Nav className="w-100">
          <NavItem className="ml-auto">
            <UncontrolledDropdown>
              <DropdownToggle tag="div" style={{ cursor: 'pointer' }}>
                <span className="nav-link dropdown-toggle nav-link-lg nav-link-user d-flex align-items-center">
                  <img alt="Profile" src={Profile} className="rounded-circle mr-2" style={{backgroundSize: 'cover', width: '30px', height: '30px'}} />
                  <div className="d-sm-none d-lg-inline-block">Hi, Novil</div>
                </span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a">
                  <i className="far fa-user"></i> Profil
                </DropdownItem>
                <div className="dropdown-divider"></div>
                <DropdownItem tag="a">
                  <span className="text-danger">
                    <i className="fas fa-sign-out-alt"></i> Keluar
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav>
      </RSNavbar>
    );
  }
}

export default Navbar;