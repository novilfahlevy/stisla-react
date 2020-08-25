import React from 'react';
import { Route, withRouter, matchPath, Switch } from 'react-router-dom';

import Navbar from '../components/Admin/Navbar';
import Sidebar from '../components/Admin/Sidebar';
import Footer from '../components/Admin/Footer';

import routes from './../routes';

class Admin extends React.Component {
  getRoutes(routes) {
    return routes
      .filter(route => route.layout === '/admin')
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
    routes = routes.filter(route => route.layout === '/admin');

    for ( let i = 0; i < routes.length; i++ ) {
      const { name, layout, path, component, pageName = null, subMenu = null } = routes[i];
      const reactRouterRoutes = {
        key: name,
        exact: true,
        path: `${layout}${path}`,
        component: component
      };

      if ( subMenu !== null ) {
        const menuName = this.getPageName(subMenu);
        if ( menuName !== 'Halaman' ) {
          return menuName;
        }
      }
      
      if ( matchPath(this.props.location.pathname, reactRouterRoutes) ) {
        return pageName || name;
      } else if ( i === routes.length - 1 ) {
        return 'Halaman';
      } else {
        continue;
      }
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
              <Switch>{this.getRoutes(routes)}</Switch>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Admin);