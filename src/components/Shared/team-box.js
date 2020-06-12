import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ image, scrollPosition }) => (
  <LazyLoadImage
    alt={image.alt}
    effect="blur"
    scrollPosition={scrollPosition}
    height={image.height}
    src={image.src} // use normal <img> attributes as props
    width={image.width}
    className={image.className}
    placeholderSrc={image.placeholderSrc}
  />
);

class TeamBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.candidates.map((candidate, key) => (
          <Col lg="3" md="6" key={key} className="mt-4 pt-2">
            <Link to={candidate.link} className="name dark-purple">
              <div
                className="team text-center bg-white pt-3 avatar-box"
                name="team"
                id="teambox"
              >
                <div className="position-relative">
                  <LazyImage
                    image={{
                      src: candidate.image,
                      placeholderSrc: candidate.imageTiny,
                      alt: candidate.name,
                      height: "100%",
                      className:
                        "img-fluid avatar avatar-ex-large rounded-pill z-depth-1-half shadow",
                    }}
                  />
                </div>
                <div className="content pt-3 pb-3">
                  <h5 className="mb-0">{candidate.name}</h5>
                  <small className="designation text-muted">
                    {candidate.designation}
                  </small>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default trackWindowScroll(TeamBox);
