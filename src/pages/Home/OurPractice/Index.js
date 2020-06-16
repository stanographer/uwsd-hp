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
      bg,
      bgTiny,
      bgPositioning,
      description,
      image,
      imageTiny,
      name,
      pathItems,
      title,
    } = this.state.data;
    return (
      <React.Fragment>
        <PageBreadcrumb
          bgSrc={bg}
          bgTiny={bgTiny}
          bgPositioning={bgPositioning}
          pathItems={pathItems}
          title={name}
        />
        {/* curve  */}
        <section className="section">
          <Container>
            <Row>
              <Col lg="4" md="5" xs="12">
                <div className="position-relative">
                  <div className="rounded shadow bg-white">
                    <div className="text-center rounded">
                      <LazyImage
                        image={{
                          src: image,
                          placeholderSrc: imageTiny,
                          alt: name,
                          height: "100%",
                          className: "img-fluid rounded img-fluid mx-auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-lg-4">
                  <h5 className="mt-4 dark-purple">{name}</h5>
                  <p className="text-muted">
                    <em>{title}</em>
                  </p>
                  <hr className="my-4" />
                  {description}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Index;
