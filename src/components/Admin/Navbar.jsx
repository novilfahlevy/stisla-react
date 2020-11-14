import React from 'react';

import { withRouter, Link } from 'react-router-dom';

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
  logout() {
    this.props.history.push('/auth/login');
  }

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
              <DropdownMenu tag="ul" right>
                <DropdownItem to="/admin/profil" tag={Link}>
                  <i className="far fa-user"></i> Profil
                </DropdownItem>
                <div className="dropdown-divider"></div>
                <DropdownItem tag={'li'} style={{ cursor: 'pointer' }} onClick={() => this.logout()}>
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

export default withRouter(Navbar);