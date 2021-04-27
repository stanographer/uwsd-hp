// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../../components/Shared/section-title";

class Procedures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      procedures: [
        {
          title: "Acne",
          // link: "/acne",
          // description: "Topical and surgical acne solutions.",
          category: "Medical",
        },
        {
          title: "Acne Keloidalis",
          // link: "/acne-keloidalis",
          category: "Medical",
        },
        {
          title: "Actinic Keratoses",
          category: "Medical",
        },
        {
          title: "Alopecia",
          link: "/alopecia",
          // description: "Here is a description about alopecia.",
          category: "Medical",
        },
        {
          title: "Athlete's foot",
          category: "Medical",
        },
        {
          title: "Atopic Dermatitis",
          category: "Medical",
        },
        {
          title: "Basal Cell Carcinoma",
          category: "Medical",
        },
        {
          title: "Bed Bugs",
          category: "Medical",
        },
        {
          title: "Benign Growths",
          category: "Medical",
        },
        {
          title: "Boils/Abscesses",
          category: "Medical",
        },
        {
          title: "Bullous Pemphigoid",
          category: "Medical",
        },
        {
          title: "Cold Sores",
          category: "Medical",
        },
        {
          title: "Contact Dermatitis",
          category: "Medical",
        },
        {
          title: "Cutaneous Lymphoma/Mycosis Fungoides",
          category: "Medical",
        },
        {
          title: "Cysts",
          category: "Medical",
        },
        {
          title: "Dandruff",
          category: "Medical",
        },
        {
          title: "Dry Skin",
          category: "Medical",
        },
        {
          title: "Eczema",
          link: "/eczema",
          // description: "Inflamed, itchy, red, cracked, and rough skin.",
          category: "Medical",
        },
        {
          title: "Folliculitis",
          category: "Medical",
        },
        {
          title: "Fungal, Viral, and Bacterial Infections",
          category: "Medical",
        },
        {
          title: "Hailey-Hailey Disease",
          category: "Medical",
        },
        {
          title: "Hair loss",
          category: "Medical",
        },
        {
          title: "Hand Eczema",
          category: "Medical",
        },
        {
          title: "Herpes Simplex",
          category: "Medical",
        },
        {
          title: "Hidradenitis Suppurativa",
          category: "Medical",
        },
        {
          title: "Hyperhydrosis (Excessive Sweating)",
          category: "Medical",
        },
        {
          title: "Hives (Urticaria)",
          category: "Medical",
        },
        {
          title: "Impetigo",
          category: "Medical",
        },
        {
          title: "Keloids/Scars",
          category: "Medical",
        },
        {
          title: "Lichen planus",
          category: "Medical",
        },
        {
          title: "Lupus",
          category: "Medical",
        },
        {
          title: "Lichen planus",
          category: "Medical",
        },
        {
          title: "Melanoma",
          category: "Medical",
        },
        {
          title: "Melasma",
          category: "Medical",
        },
        {
          title: "Moles",
          category: "Medical",
        },
        {
          title: "Molluscum Contagiosum",
          category: "Medical",
        },
        {
          title: "Lentigines (Liver Spots)",
          category: "Medical",
        },
        {
          title: "Nail Fungus",
          category: "Medical",
        },
        {
          title: "Patch Testing for Contact Dermatitis",
          category: "Medical",
        },
        {
          title: "Perioral Dermatitis",
          category: "Medical",
        },
        {
          title: "Pityriasis Rosea",
          category: "Medical",
        },
        {
          title: "Photosensitivity/Sun-Induced Rashes",
          category: "Medical",
        },
        {
          title: "Psoriasis",
          link: "/psoriasis",
          // description:
          // "Skin cells build up and form scales and itchy, dry patches.",
          category: "Medical",
        },
        {
          title: "Poison Ivy",
          category: "Medical",
        },
        {
          title: "Rash",
          category: "Medical",
        },
        {
          title: "Red Spots",
          category: "Medical",
        },
        {
          title: "Ring Worm",
          category: "Medical",
        },
        {
          title: "Rosacea",
          link: "/rosacea",
          // description: "Stuff about rosacea.",
          category: "Medical",
        },
        {
          title: "Scabies",
          category: "Medical",
        },
        {
          title: "Seborrheic Dermatitis",
          category: "Medical",
        },
        {
          title: "Shingles",
          category: "Medical",
        },
        {
          title: "Skin Cancer",
          category: "Medical",
        },
        {
          title: "Skin Tags",
          category: "Medical",
        },
        {
          title: "Squamous Cell Carcinoma",
          category: "Medical",
        },
        {
          title: "Sun Damage",
          category: "Medical",
        },
        {
          title: "Telangectasias",
          category: "Medical",
        },

        {
          title: "Tinea Versicolor",
          category: "Medical",
        },
        {
          title: "Telangectasias",
          category: "Medical",
        },
        {
          title: "Vitiligo",
          link: "/vitiligo",
          // description: "Here is a description about vitiligo",
          category: "Medical",
        },
        {
          title: "Warts",
          link: "/warts",
          // description: "Something here about warts.",
          category: "Medical",
        },
        {
          title: "Skin Cancer Screening",
          link: "/skin-cancer-screening",
          // description: "Latest cancer screening techniques.",
          category: "Medical",
        },
        {
          title: "Moles",
          link: "/moles",
          // description: "Something about moles here.",
          category: "Medical",
        },
        {
          title: "Phototherapy NB-UVB",
          link: "/phototherapy",
          // description: "Revolutionary treatment.",
          category: "Medical",
        },
        {
          title: "PDT - Blue & Red Light Treatment",
          link: "/pdt",
          // description: "Sounds really fancy.",
          category: "Medical",
        },
        {
          title: "Botox & Dysport",
          link: "/botox-and-dysport",
          // description:
          // "Makes it impossible for you to show emotion on your face.",
          category: "Cosmetic",
        },
        {
          title: "Fillers",
          link: "/fillers",
          // description: "Fill in those wrinkles!",
          category: "Cosmetic",
        },
        {
          title: "Laser treatments - IPL",
          link: "/laser-treatments",
          // description: "We have the most advanced in laser treatment.",
          category: "Cosmetic",
        },
        {
          title: "Laser Hair Removal",
          link: "/laser-hair-removal",
          // description: "Remove all that gross hair and get yourself a man.",
          category: "Cosmetic",
        },
        {
          title: "Body Contouring & Sculpting",
          link: "/body-contouring-and-sculpting",
          // description: "Something about body conturing here.",
          category: "Cosmetic",
        },
        {
          title: "Microneedling",
          link: "/microneedling",
          // description: "Got scars? Microneedling may be the answer for you.",
          category: "Cosmetic",
        },
        {
          title: "PRP",
          link: "/prp",
          // description: "I don't even know what this is",
          category: "Cosmetic",
        },
        {
          title: "Acne Scars",
          link: "/acne-scars",
          // description: "Let's annihilate those scars.",
          category: "Cosmetic",
        },
        {
          title: "Sculptra",
          link: "/sculptra",
          // description: "Another thing I do not know.",
          category: "Cosmetic",
        },
        {
          title: "Kybella",
          link: "/kybella",
          // description: "Probably an advanced filler of some type.",
          category: "Cosmetic",
        },
        {
          title: "Nova Threads",
          link: "/nova-threads",
          // description: "No clue what this is.",
          category: "Cosmetic",
        },
        {
          title: "Chemical Peels",
          link: "/chemical-peels",
          // description:
          // "Don't put 100% TCA on your face unless you want it to melt.",
          category: "Cosmetic",
        },
        {
          title: "Facials",
          link: "/facials",
          // description: "I could use one of these right now.",
          category: "Cosmetic",
        },
        {
          title: "Mohs Surgery",
          link: "/mohs-surgery",
          // description: "Cancer is bad, mmkay?",
          category: "Surgical",
        },
      ],
      displayCategory: "Medical",
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
            <SectionTitle isLeft={false} title="Conditions &amp; Procedures" />

            <Row className="my-4">
              <ul
                className="col container-filter list-unstyled categories-filter text-center"
                id="filter"
              >
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={() => this.setCategory("Medical")}
                    className={
                      this.state.displayCategory === "Medical"
                        ? "categories border d-block text-dark rounded active"
                        : "categories border d-block text-dark rounded"
                    }
                  >
                    Medical
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
                  <Col md="4" xs="12">
                    <Link to={procedure.link}>
                      <div className="faq-container" key={key}>
                      {/* <i className="mdi mdi-arrow-right-bold-circle-outline text-primary mr-2 h4"></i> */}
                        <h4 className="question">
                          {" "}
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
