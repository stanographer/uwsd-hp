// React Basic and Bootstrap

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Components
import SectionTitle from "../../../components/Shared/section-title";
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";

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

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }

  componentDidMount() {
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
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    const {
      additionalInfo,
      bg,
      bgTiny,
      bgPositioning,
      description,
      devices,
      image,
      imageTiny,
      pathItems,
      procedures,
      sectionTitle,
      title,
    } = this.state.data;
    return (
      <React.Fragment>
        <PageBreadcrumb
          bgSrc={bg}
          bgTiny={bgTiny}
          bgPositioning={bgPositioning}
          title={title}
          pathItems={pathItems}
        />
        {/* curve  */}
        <section className="section">
          <Container>
            <Row>
              <Col lg="4" md="5" xs="12">
                <LazyImage
                  image={{
                    src: image,
                    placeholderSrc: imageTiny,
                    alt: "header image",
                    height: "100%",
                    className: "img-fluid rounded img-fluid mx-auto d-block",
                  }}
                />
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-lg-4 mb-3">
                  <h4 className="mb-4">{sectionTitle}</h4>
                  <div className="mb-5 text-muted">{description}</div>
                  <div className="mt-4">
                    {devices && (
                      <section>
                        <ul className="mb-12">
                        {devices.map((device, key) => (
                          <li key={key}>{device.title}</li>
                        ))}
                      </ul>
                      </section>
                    )}
                    <Link to="/page-job-apply" className="btn btn-primary">
                      Contact Us Today
                    </Link>
                  </div>
                  <div className="mt-5">{additionalInfo}</div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {procedures && (
          <section className="bg-light section">
            <Container>
              <Row className="flex">
                {procedures.map((procedure, key) => (
                  <Col xs={12} sm={4} className="mb-4">
                    {procedure.title}
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        )}
      </React.Fragment>
    );
  }
}

function ProcedureList(props) {
  return (
    <React.Fragment>
      {props.procedures
        .filter((item) => item.category === "injectables")
        .map((procedure, key) => (
          <Col md="4" xs="12">
            <Link to={procedure.link}>
              <div className="faq-container" key={key}>
                {/* <i className="mdi mdi-arrow-right-bold-circle-outline text-primary mr-2 h4"></i> */}
                <h4 className="question"> {procedure.title}</h4>
                <p className="answer text-muted ml-lg-4 pl-lg-3 mb-3">
                  {procedure.description}
                </p>
              </div>
            </Link>
          </Col>
        ))}
    </React.Fragment>
  );
}

export default Index;
