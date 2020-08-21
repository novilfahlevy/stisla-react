import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Container
} from 'reactstrap';

import routes from './../routes';

class Auth extends React.Component {
  getRoutes(routes) {
    return routes
      .filter(route => route.layout === '/auth')
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
      <Container className="mt-5">
        <Switch>{this.getRoutes(routes)}</Switch>
      </Container>
    );
  }
}

export default Auth;