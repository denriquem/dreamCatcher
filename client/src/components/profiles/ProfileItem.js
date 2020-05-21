import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileItem = ({
  profile: {
    user: { _id, name },
    status,
    planet,
    skills,
  },
}) => {
  return (
    <div className="profile bg-light">
      <div>
        <h2>{name}</h2>
        <p>{planet}</p>
        <p>{status}</p>
        <ul>
          {skills.slice(0.4).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check"></i> {skill}
            </li>
          ))}
        </ul>
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
