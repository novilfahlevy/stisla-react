import React from 'react';
import { Row } from 'reactstrap';

class Dashboard extends React.Component {
  render() {
    return (
      <Row>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-primary">
              <i className="fas fa-users-cog"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Jumlah Admin</h4>
              </div>
              <div className="card-body">
                10
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-warning">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Jumlah User</h4>
              </div>
              <div className="card-body">
                20
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default Dashboard;