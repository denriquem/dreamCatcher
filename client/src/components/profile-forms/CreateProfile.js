import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    planet: "",
    dreamAnimal: "",
    dreamColour: "",
    dreamMusic: "",
    status: "",
    skills: "",
    bio: "",
    youtube: "",
    twitter: "",
    facebook: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    planet,
    dreamAnimal,
    dreamColour,
    dreamMusic,
    status,
    skills,
    bio,
    youtube,
    twitter,
    facebook,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 class="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Planet"
            name="planet"
            value={planet}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Give us an idea what of planet you're on
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Dream Animal"
            name="dreamAnimal"
            value={dreamAnimal}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            It could be the animal of your dreams
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Dream Music"
            name="dreamMusic"
            value={dreamMusic}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">A soundtrack for your dreams</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Awake, asleep or still dreaming?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg. lucid dreamer, lucid snorer,
            insomniac, night owl )
          </small>
        </div>

        <div className="form-group">
          <textarea
            placeholder="A short bio about you"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
