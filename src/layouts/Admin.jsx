import React from 'react';

import Navbar from './../components/admin/Navbar';
import Sidebar from './../components/admin/Sidebar';
import Footer from './../components/admin/Footer';

class Admin extends React.Component {
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
              @yield('content')
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Admin;