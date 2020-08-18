import React from 'react';

import { Row, Col } from 'reactstrap';

import StislaLogo from './../../assets/img/stisla-fill.svg';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  render() {
    return (
      <>
        <div class="login-brand">
          <img src={StislaLogo} alt="logo" width="100" class="shadow-light rounded-circle" />
        </div>

        <Row className="justify-content-center">
          <Col sm="8" md="4">
          <div class="card card-primary">
            <div class="card-header"><h4>Register</h4></div>

            <div class="card-body">
              <form method="POST" action="/">
                <div class="row">
                  <div class="form-group col-12">
                    <label for="name">Nama</label>
                    <input id="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus />
                    {/* <span class="invalid-feedback" role="alert">
                      <strong></strong>
                    </span>\ */}
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" type="email" class="form-control" name="email" required autocomplete="email" />
                  {/* <span class="invalid-feedback" role="alert">
                    <strong></strong>
                  </span> */}
                </div>

                <div class="row">
                  <div class="form-group col-6">
                    <label for="password" class="d-block">Password</label>
                    <input id="password" type="password" class="form-control" name="password" required autocomplete="new-password" />
                    {/* <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    </span> */}
                    <div id="pwindicator" class="pwindicator">
                      <div class="bar"></div>
                      <div class="label"></div>
                    </div>
                  </div>
                  <div class="form-group col-6">
                    <label for="password2" class="d-block">Konfirmasi Password</label>
                    <input id="password2" type="password" class="form-control" name="password_confirmation" />
                  </div>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-lg btn-block">
                    Buat Akun
                  </button>
                </div>

                <p className="mb-0 text-center">Sudah punya akun? <Link to="/auth/login">Login disini.</Link></p>
              </form>
            </div>
          </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Register;