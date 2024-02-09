import React from "react";

const SingleContact = ({ item }) => (
  <div className="row">
    <div className="col s12">
      <div className="card blue lighten-2 z-depth-1">
        <div className="card-content white-text">
          <span className="card-title center-align">
            {item.firstName} {item.lastName}
          </span>
          <p className="center-align">{item.email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default SingleContact;
