import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <div className="dash-buttons">
        <Link to="/edit-profile" class="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>

        <Link to="/add-experience" class="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;
