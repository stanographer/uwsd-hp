import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Import Images
import img1 from "../../images/badges/aad.png";
import img2 from "../../images/badges/aslms.jpg";
import img3 from "../../images/badges/acms.jpg";
import img4 from "../../images/badges/asds.jpg";
import img5 from "../../images/badges/castle-connolly-travis.jpg";
import img6 from "../../images/badges/castle-connolly-connelley.jpg";

class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Row id="partners">
          <Col id="partner1" lg="2" md="2" xs="4" className="text-center">
            <img src={img1} className="avatar avatar-small" alt="" />
          </Col>
          <Col id="partner2"
            lg="2"
            md="2"
            xs="4"
            className="text-center mt-0 mt-sm-4" className="text-center">
            <img src={img2} className="avatar avatar-small" alt="" />
          </Col>
          <Col
            id="partner3"
            lg="2"
            md="2"
            xs="4"
            className="text-center mt-4 mt-sm-0"
          >
            <img src={img3} className="avatar avatar-small" alt="" />
          </Col>
          <Col
            id="partner4"
            lg="2"
            md="2"
            xs="4"
            className="text-center mt-4 mt-sm-0"
          >
            <img src={img4} className="avatar avatar-small" alt="" />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Partners;
