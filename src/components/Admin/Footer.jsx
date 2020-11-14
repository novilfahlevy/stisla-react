import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="footer-left">
          Copyright &copy; 2018 <div className="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
        </div>
        <div className="footer-right">
          2.3.0
        </div>
      </footer>
    );
  }
}

export default Footer;