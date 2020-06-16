import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image-loading";

// import images
import bg from "../../images/stock/succulent.jpg";
import bgTiny from "../../images/stock/succulent_tiny.jpg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <ProgressiveImage
          preview={bgTiny}
          src={bg}
          transitionTime={500}
          transitionFunction="ease"
          render={(src, style) => (
            <section
              id="home"
              className="bg-home bg-light d-flex align-items-center"
              style={Object.assign(style, {
                backgroundImage: `url(${src})`,
                backgroundSize: `cover`,
              })}
            >
              <Container>
                <Row className="align-items-center">
                  <Col lg={7} md={7}>
                    <div className="title-heading mt-4">
                      <h1 className="heading mb-3">
                        Your destination for compassionate dermatological care
                        in the heart of{" "}
                        <span className="text-primary">Manhattan.</span>{" "}
                      </h1>
                      <div className="mt-4 pt-2">
                        <Link
                          to="/our-practice"
                          className="btn btn-primary mt-2 mr-1"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          )}
        />
      </React.Fragment>
    );
  }
}

export default Section;
