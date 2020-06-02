import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileItem = ({
  profile: {
    avatar,
    user: { _id, name },
    status,
    planet,
  },
}) => {
  return (
    <div className="profile lead">
      <div>
        <p>{name}</p> <p>{planet}</p>{" "}
        <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
