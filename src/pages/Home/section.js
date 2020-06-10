import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// import images
import bg from "../../images/stock/succulent.jpg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home bg-light d-flex align-items-center"
          style={{
            background: `url(${bg}) center center`,
            backgroundSize: `cover`,
          }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={7}>
                <div className="title-heading mt-4">
                  <h1 className="heading mb-3">
                    Your destination for compassionate dermatological care in
                    the heart of <span className="text-primary">Manhattan.</span>{" "}
                  </h1>
                  <div className="mt-4 pt-2">
                    <Link
                      to="schedule-appointment"
                      className="btn btn-outline-primary mt-2 mr-1"
                    >
                      Schedule Appointment
                    </Link>
                    <Link
                      to="registration-form"
                      className="btn btn-primary mt-2 ml-1"
                    >
                       Registration Form
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
