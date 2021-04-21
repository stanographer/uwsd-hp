//*noinspection CssInvalidAtRule*/

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Import Components
import SectionTitle from "../../components/Shared/section-title";

// Import images
import staff from "../../images/team/staff2.jpg";
import staffTiny from "../../images/team/staff2_tiny.jpg";

const LazyImage = ({ image, scrollPosition }) => (
  <LazyLoadImage
    alt={image.alt}
    delayTime={1000}
    effect="blur"
    scrollPosition={scrollPosition}
    height={image.height}
    src={image.src} // use normal <img> attributes as props
    width={image.width}
    className={image.className}
    placeholderSrc={image.placeholderSrc}
  />
);

class MeetThePhysicians extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendMail() {
    window.location.href = "mailto:uwsderm@gmail.com";
  }

  callOffice() {
    window.location.href = "tel:+12127690069";
  }

  callFax() {
    window.location.href = "tel:+12127690075";
  }

  render() {
    return (
      <React.Fragment>
        <>
          <a
            style={{ display: "none" }}
            href="https://www.zocdoc.com/practice/upper-west-side-dermatology-1307"
            className="zd-plugin"
            data-type="book-button"
            data-practice-id="1307"
            title="Upper West Side Dermatology"
          >
            <img
              src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png"
              alt="Upper West Side Dermatology"
              title="Upper West Side Dermatology"
              style={{ border: 0 }}
            />
          </a>
        </>
        <section className="section pt-0 bg-light">
          <Container fluid>
            <Row>
              <Col className="p-0">
                <div className="map">
                  <iframe
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1630711079783!2d-73.98658228432558!3d40.78042897932451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588a575394bb%3A0x33aab9cb577f98b3!2s277%20West%20End%20Ave%2C%20New%20York%2C%20NY%2010023!5e0!3m2!1sen!2sus!4v1591307857751!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
          <Container id="contact" className="mt-100 mt-60 mb-100 mb-60">
            <SectionTitle
              className="mb-40"
              isLeft={true}
              title="Location &amp; Hours"
              desc="We are conveniently located off the West Side Highway in the heart of the Upper West Side in New York City. Easy access by subway at the 72nd Street stop on the 1 Line."
            />
            <Row>
              <Col lg="8" md="6">
                <LazyImage
                  image={{
                    src: staff,
                    alt: "UWSD Reception Staff",
                    height: "100%",
                    className: "rounded img-fluid mx-auto d-block",
                    placeholderSrc: staffTiny,
                  }}
                />
              </Col>
              <Col lg="4" md="6" className="mt-4 pt-2">
                <div className="title-heading ml-lg-4">
                  <div className="contact-detail mt-3 mb-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-map-marker-outline text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Location</h4>
                      <div id="message">
                        277 West End Ave Suite 1B
                        <br />
                        New York, NY 10023
                        <br />
                        <span className="text-muted">
                          <em>(Entrance on 73rd Street)</em>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-email-variant text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Email</h4>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary h6"
                      >
                        uwsderm@uwsdermatology.com
                      </Link>
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-phone text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Phone</h4>
                      <Link
                        to="#"
                        onClick={this.callOffice}
                        className="text-primary h6"
                      >
                        +1 212 769 0069
                      </Link>
                      <br />
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-android-messages text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Text Us</h4>
                      <Link
                        to="#"
                        onClick={this.callOffice}
                        className="text-primary h6"
                      >
                        +1 833 656 0677
                      </Link>
                      <br />
                    </div>
                  </div>

                  <div className="contact-detail mt-3 mb-4">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-printer text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Fax</h4>
                      <Link
                        to="#"
                        onClick={this.callFax}
                        className="text-primary h6"
                      >
                        +1 212 769 0075
                      </Link>
                    </div>
                  </div>

                  <div className="mt-8 center-on-mobile">
                    <Link to="/contact" className="text-primary">
                      Go to Contact Page{" "}
                      <i className="mdi mdi-chevron-right"></i>
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

export default trackWindowScroll(MeetThePhysicians);
