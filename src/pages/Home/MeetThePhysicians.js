// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Components
import SectionTitle from "../../components/Shared/section-title";
import SectionTitleLeft from "../../components/Shared/section-title-left";

// Import images
import docs from "../../images/team/docs.jpg";
import docsTiny from "../../images/team/docs_tiny.jpg";

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

class MeetThePhysicians extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { title: "Compassionate and personalized care" },
        { title: "LGBTQIA+ friendly" },
        { title: "Faculty members at NYU" },
      ],
    };
  }

  componentDidMount() {
    var sectionTitle = document.getElementsByName("maintitle");
    sectionTitle[1].classList.remove("mb-4");
    sectionTitle[1].classList.remove("pb-2");
    sectionTitle[1].classList.add("mb-60");
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <span className="show-on-mobile">
              <SectionTitle isLeft={true} title="Meet the Staff" />
            </span>
            <Row className="align-items-center">
              <Col lg="5" md="6">
                <LazyImage
                  image={{
                    src: docs,
                    placeholderSrc: docsTiny,
                    alt: "UWSD Staff",
                    height: "100%",
                    className: "rounded img-fluid mx-auto d-block preview lazy"
                  }}
                />
              </Col>
              <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ml-lg-5">
                  <span className="show-on-desktop">
                    <SectionTitleLeft
                      title="Meet the Staff"
                      desc="Our team of board-certified dermatologists is experienced with both the fundamental and latest treatments in medical, pediatric, surgical, and cosmetic dermatology. Each dermatologist contributes unique skills, and we collaborate to deliver comprehensive and individualized care to every patient."
                      features={this.state.points}
                      class="mdi-18px h5 mr-2"
                    />
                  </span>
                  <span className="show-on-mobile">
                    <SectionTitleLeft
                      desc="Our team of board-certified dermatologists is experienced with both the fundamental and latest treatments in medical, pediatric, surgical, and cosmetic dermatology. Each dermatologist contributes unique skills, and we collaborate to deliver comprehensive and individualized care to every patient."
                      features={this.state.points}
                      class="mdi-18px h5 mr-2"
                    />
                  </span>
                  <div className="center-on-mobile">
                    <Link
                      to="/physicians"
                      className="mt-4 text-primary center-on-mobile"
                    >
                      Find Out More <i className="mdi mdi-chevron-right"></i>
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
