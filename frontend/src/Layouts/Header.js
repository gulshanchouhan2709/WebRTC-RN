import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import images
import logoSm from 'assets/images/logo-sm.png';
import logoDark from 'assets/images/logo-dark.png';
import logoLight from 'assets/images/logo-light.png';

const Header = () => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoSm} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="55" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
