// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../../components/Shared/section-title";

const procedures = {};

class Procedures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      procedures: [
        {
          title: "Acne",
          link: "/acne",
          description: "Topical and surgical acne solutions.",
          category: "Surgical",
        },
        {
          title: "Eczema",
          link: "/eczema",
          description: "Inflamed, itchy, red, cracked, and rough skin.",
          category: "Surgical",
        },
        {
          title: "Psoriasis",
          link: "/psoriasis",
          description:
            "Skin cells build up and form scales and itchy, dry patches.",
          category: "Surgical",
        },
        {
          title: "Vitiligo",
          link: "/vitiligo",
          description: "Here is a description about vitiligo",
          category: "Surgical",
        },
        {
          title: "Alopecia",
          link: "/alopecia",
          description: "Here is a description about alopecia.",
          category: "Surgical",
        },
        {
          title: "Warts",
          link: "/warts",
          description: "Something here about warts.",
          category: "Surgical",
        },
        {
          title: "Skin Cancer Screening",
          link: "/skin-cancer-screening",
          description: "Latest cancer screening techniques.",
          category: "Surgical",
        },
        {
          title: "Rosacea",
          link: "/rosacea",
          description: "Stuff about rosacea.",
          category: "Surgical",
        },
        {
          title: "Moles",
          link: "/moles",
          description: "Something about moles here.",
          category: "Surgical",
        },
        {
          title: "Phototherapy NB-UVB",
          link: "/phototherapy",
          description: "Revolutionary treatment.",
          category: "Surgical",
        },
        {
          title: "PDT - Blue & Red Light Treatment",
          link: "/pdt",
          description: "Sounds really fancy.",
          category: "Surgical",
        },
        {
          title: "Laser treatments - IPL",
          link: "/laser-treatments",
          description: "We have the most advanced in laser treatment.",
          category: "Cosmetic",
        },
        {
          title: "Laser Hair Removal",
          link: "/laser-hair-removal",
          description: "Remove all that gross hair and get yourself a man.",
          category: "Cosmetic",
        },
        {
          title: "Botox",
          link: "/botox",
          description:
            "Makes it impossible for you to show emotion on your face.",
          category: "Cosmetic",
        },
        {
          title: "Fillers",
          link: "/fillers",
          description: "Fill in those wrinkles!",
          category: "Cosmetic",
        },
        {
          title: "Body Contouring & Sculpting",
          link: "/body-contouring-and-sculpting",
          description: "Something about body conturing here.",
          category: "Cosmetic",
        },
        {
          title: "Microneedling",
          link: "/microneedling",
          description: "Got scars? Microneedling may be the answer for you.",
          category: "Cosmetic",
        },
        {
          title: "PRP",
          link: "/prp",
          description: "I don't even know what this is",
          category: "Cosmetic",
        },
        {
          title: "Acne Scars",
          link: "/acne-scars",
          description: "Let's annihilate those scars.",
          category: "Cosmetic",
        },
        {
          title: "Sculptra",
          link: "/sculptra",
          description: "Another thing I do not know.",
          category: "Cosmetic",
        },
        {
          title: "Kybella",
          link: "/kybella",
          description: "Probably an advanced filler of some type.",
          category: "Cosmetic",
        },
        {
          title: "Nova Threads",
          link: "/nova-threads",
          description: "No clue what this is.",
          category: "Cosmetic",
        },
        {
          title: "Chemical Peels",
          link: "/chemical-peels",
          description:
            "Don't ever put anything higher than 30% TCA on your face unless you want it to melt.",
          category: "Cosmetic",
        },
        {
          title: "Facials",
          link: "/facials",
          description: "I could use one of these right now.",
          category: "Cosmetic",
        },
      ],
      displayCategory: "Surgical",
    };
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <SectionTitle
              isLeft={false}
              title="Conditions &amp; Procedures"
            />

            <Row className="my-4">
              <ul
                className="col container-filter list-unstyled categories-filter text-center"
                id="filter"
              >
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Surgical")}
                    className={
                      this.state.displayCategory === "Surgical"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Surgical
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Cosmetic")}
                    className={
                      this.state.displayCategory === "Cosmetic"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Cosmetic
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("All")}
                    className={
                      this.state.displayCategory === "All"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    All
                  </Link>
                </li>
              </ul>
            </Row>

            <Row>
              {this.state.procedures
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === "All"
                )
                .map((procedure, key) => (
                  <Col md="4" xs="6">
                    <Link to={procedure.link}>
                      <div className="faq-container" key={key}>
                        <h4 className="question">
                          <i className="mdi mdi-arrow-right-bold-circle-outline text-primary mr-2 h4"></i>{" "}
                          {procedure.title}
                        </h4>
                        <p className="answer text-muted ml-lg-4 pl-lg-3 mb-3">
                          {procedure.description}
                        </p>
                      </div>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Procedures;
