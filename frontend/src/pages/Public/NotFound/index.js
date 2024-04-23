import React from "react";

const NotFound = () => {
  document.title = `404 Not Found | WebRTC`;
  return (
    <React.Fragment>
      <div className="page-content">
        Oops! not found...
      </div>
    </React.Fragment>
  );
};

export default NotFound;
