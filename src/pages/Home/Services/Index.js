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
      image,
      imageTiny,
      pathItems,
      title,
      treatmentDescription,
      treatments,
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
                    alt: "UWSD Staff",
                    height: "100%",
                    className: "img-fluid rounded img-fluid mx-auto d-block",
                    alt: "Image of Acne",
                  }}
                />
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-lg-4 mb-3">
                  <h4 className="mb-4">About {title}</h4>
                  <p className="mb-5 text-muted">{description}</p>
                  <div className="mt-4">
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

        {treatments && (
          <>
            <section className="bg-light section">
              <Container>
                <SectionTitle title="Our Treatment Options" />
                {treatments.map((treatment, key) => (
                  <React.Fragment>
                    <div className="faq-container mb-5" key={key}>
                      <h4 className="question darker-purple">
                        {treatment.title}
                      </h4>
                      <p className="answer text-muted ml-lg-4 pl-lg-3 mb-3 mt-4">
                        <p className="dark-purple">
                          <em>
                            {treatment.sectionHeader
                              ? `What ${treatment.plural ? "are" : "is"} ${
                                  treatment.title
                                }?`
                              : null}
                          </em>
                        </p>
                        {treatment.description}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </Container>
            </section>
          </>
        )}
      </React.Fragment>
    );
  }
}
export default Index;
