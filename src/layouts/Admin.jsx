import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Navbar from './../components/Admin/Navbar';
import Sidebar from './../components/Admin/Sidebar';
import Footer from './../components/Admin/Footer';

import { sidebar as routes } from './../routes';

class Admin extends React.Component {
  getRoutes(routes) {
    return routes
      .filter(route => route.isActive)
      .map(({ path, layout, component, subMenu = null }, key) => {
        if ( subMenu !== null ) return this.getRoutes(subMenu);
        return (
          <Route
            exact
            path={`${layout}${path}`}
            component={component}
            key={key}
          />
        );
      });
  }

  getPageName(routes) {
    for ( let i = 0; i < routes.length; i++ ) {
      const { name, layout, path, subMenu = null } = routes[i];
      if ( subMenu !== null ) {
        return this.getPageName(subMenu);
      }
      return `${layout}${path}` === this.props.location.pathname ? name : 'Page';
    }
  }

  render() {
    return (
      <div className="main-wrapper-1">
        <div className="navbar-bg"></div>
        <Navbar />
        <Sidebar />  
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>{this.getPageName(routes)}</h1>
            </div>
            <div className="section-body">
              {this.getRoutes(routes)}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Admin);