import React from 'react';

import StislaLogo from './../../assets/img/stisla-fill.svg';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="login-brand">
          <img src={StislaLogo} alt="logo" width="100" className="shadow-light rounded-circle" />
        </div>

        <Row className="justify-content-center">
          <Col sm="8" md="4">
            <div className="card card-primary">
              <div className="card-header"><h4>Login</h4></div>

              <div className="card-body">
                <form method="POST" action="/" className="needs-validation" noValidate="">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" name="email" required autoComplete="email" autoFocus />
                    {/* <span className="invalid-feedback" role="alert">
                      <strong></strong>
                    </span> */}
                  </div>

                  <div className="form-group">
                    <div className="d-block">
                      <label htmlFor="password" className="control-label">Password</label>
                    </div>
                    <input id="password" type="password" className="form-control" name="password" required autoComplete="current-password" />
                    {/* <span className="invalid-feedback" role="alert">
                      <strong></strong>
                    </span> */}
                  </div>

                  {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                      <label className="custom-control-label" htmlFor="remember">Ingat saya</label>
                    </div>
                  </div> */}

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4">
                      Login
                    </button>
                  </div>

                  <p className="mb-0 text-center">Belum punya akun? <Link to="/auth/register">Buat disini.</Link></p>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Login;