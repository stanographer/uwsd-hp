// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

// Import Generic Components
import Location from "./Location";
import Section from "./section";
import SectionTitle from "../../components/Shared/section-title";
import Partners from "../../components/Shared/Partners";
import MeetThePhysicians from "./MeetThePhysicians";
import Procedures from "./Procedures";

class IndexMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollNavigation = this.scrollNavigation.bind(this);
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      setTimeout(
        () => document.getElementById("topnav").classList.add("nav-sticky"),
        100
      );
    } else {
      setTimeout(
        () => document.getElementById("topnav").classList.remove("nav-sticky"),
        100
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Home Section */}
        <Section />

        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="pt-5 pb-5 border-bottom">
          <Container>
            <Partners />
          </Container>
        </section>
        <section className="pt-5 pb-5 border-bottom">
          <SectionTitle
            title="Important Covid-19 Updates"
            desc={
              <>
                <p>
                  While many things have changed since the start of the COVID-19
                  outbreak, we are still committed to your safety and to
                  providing quality care. We understand that you may have some
                  concerns regarding returning to a doctor's office at this
                  time. Rest assured that we are implementing strict safety
                  procedures and following infection control recommendations
                  advised by the CDC to protect both our patients and staff."
                </p>

                <p>
                  <strong>
                    NOTE: All patients <em>must</em> fill out our Covid-19
                    Screening Form prior to their visit.
                    <br />
                    Click{" "}
                    <a
                      href="https://forms.gle/5H5hvDBGbQr6F6wi9"
                      target="_blank"
                      className="underline"
                    >
                      here
                    </a>{" "}
                    to access the form.
                  </strong>
                </p>
              </>
            }
          />
          <Row className="justify-content-center">
            <a href="/covid-protocols" className="btn btn-primary mt-2 mr-1">
              Our Covid-19 Protocols
            </a>
          </Row>
        </section>
        <LazyLoadComponent>
          <MeetThePhysicians />
          <Procedures />
          <Location />
        </LazyLoadComponent>

        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="#452d42"
              ></path>
            </svg>
          </div>
        </div>

        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="#452d42"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IndexMain;
