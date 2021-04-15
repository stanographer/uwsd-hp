import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Physicians", link: "/physicians" },
        { title: "Patient Information", link: "/patient-information" },
        { title: "Insurances", link: "/insurances" },
        { title: "New Patient Forms", link: "/new-patient-forms" },
        { title: "Location & Hours", link: "/location-and-hours" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link
                  className={
                    this.props.isLight ? "logo-footer text-dark" : "logo-footer"
                  }
                  to="#"
                >
                  <span className="playfair">Upper West Side Dermatology</span><span className="text-primary">.</span>
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  Find us on social media.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item mr-1">
                    <a href="https://www.facebook.com/upperwestsidedermatology/" target="_blank" rel="noreferrer noopener" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="https://www.instagram.com/uwsdermatology/" target="_blank" rel="noreferrer noopener" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="https://twitter.com/uwsderm/" target="_blank" rel="noreferrer noopener" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                </ul>
              </Col>

              <Col
                md="6"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h4
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Our Practice
                </h4>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right mr-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="12">
                <div className="text-sm-left">
                  <p className="mb-0">
                    <em>© 2020-21 Upper West Side Dermatology</em>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
