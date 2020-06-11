import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class TeamBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.candidates.map((candidate, key) => (
          <Col lg="3" md="6" key={key} className="mt-4 pt-2">
            <div
              className="team text-center bg-white pt-3 avatar-box"
              name="team"
              id="teambox"
            >
              <div className="position-relative">
                <img
                  src={candidate.image}
                  className="img-fluid avatar avatar-ex-large z-depth-1-half shadow"
                  alt=""
                />
                <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                  <li>Read more...</li>
                </ul>
              </div>
              <div className="content pt-3 pb-3">
                <h5 className="mb-0">
                  <Link to={candidate.link} className="name dark-purple">
                    {candidate.name}
                  </Link>
                </h5>
                <small className="designation text-muted">
                  {candidate.designation}
                </small>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default TeamBox;
