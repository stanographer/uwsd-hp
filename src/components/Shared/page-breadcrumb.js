import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProgressiveImage from "react-progressive-image-loading";

class PageBreadcrumb extends Component {
  render() {
    const length = this.props.pathItems.length;
    const { bgSrc, bgTiny, bgPositioning } = this.props;

    return (
      <React.Fragment>
        <ProgressiveImage
          preview={bgTiny}
          src={bgSrc}
          transitionTime={500}
          transitionFunction="ease"
          render={(src, style) => (
            <section
              className="bg-half bg-light d-table w-100"
              style={Object.assign(style, {
                backgroundImage: `url(${src})`,
                backgroundPosition: bgPositioning || `center bottom`,
                backgroundSize: `cover`,
              })}
            >
              <div className="bg-overlay bg-overlay-white" />
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12" className="text-center">
                    <div className="page-next-level">
                      {this.props.title ? (
                        <h2 className="title">
                          {this.props.title}
                        </h2>
                      ) : null}
                      
                      {this.props.children ? this.props.children : null}
                      
                      <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                        {this.props.pathItems.map((item, key) =>
                          item.id !== length ? (
                            <li key={key}>
                              <Link
                                to={item.link}
                                className="text-uppercase font-weight-bold text-dark"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ) : (
                            <li key={key}>
                              <span className="text-uppercase text-primary font-weight-bold">
                                {item.name}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          )}
        />
      </React.Fragment>
    );
  }
}

export default PageBreadcrumb;
