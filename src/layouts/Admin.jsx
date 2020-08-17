import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './../components/Admin/Navbar';
import Sidebar from './../components/Admin/Sidebar';
import Footer from './../components/Admin/Footer';

import { sidebar as routes } from './../routes';

class Admin extends React.Component {
  getRoutes(routes) {
    return routes
      .filter(route => route.isActive)
      .map(({ path, layout, component }, key) => {
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

  render() {
    return (
      <div className="main-wrapper-1">
        <div className="navbar-bg"></div>
        <Navbar />
        <Sidebar />  
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>Halaman</h1>
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

export default Admin;