// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// Import Generic Components
import Location from "./Location";
import Section from "./section";
import Partners from "../../components/Shared/Partners";
import MeetThePhysicians from "./MeetThePhysicians";
import Testi from "./Testi";
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
    
    setTimeout(() => {
      const script = document.createElement("script");

      script.src = "https://offsiteschedule.zocdoc.com/plugin/embed";
      script.async = true;

      document.body.appendChild(script);

  }, 600);
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

        <MeetThePhysicians />

        <Procedures />

        <Location />
        <LazyLoadComponent>
          {/* Testi */}
          <Testi />
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
