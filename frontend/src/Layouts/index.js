import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'Components/Common/withRouter';

//import Components
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div id="layout-wrapper">
      <Header />
      <div className="main-content">
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default withRouter(Layout);
