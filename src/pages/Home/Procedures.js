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
          title: "Seborrheic Keratoris",
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
          title: "Acne Scarring",
          category: "Cosmetic",
        },
        {
          title: "Botox®",
          category: "Cosmetic",
        },
        {
          title: "Brown Spots / Age",
          category: "Cosmetic",
        },
        {
          title: "Cosmetic Mole Removal",
          category: "Cosmetic",
        },
        {
          title: "Facial Redness",
          category: "Cosmetic",
        },
        {
          title: "Facial Veins",
          category: "Cosmetic",
        },
        {
          title: "Fillers",
          category: "Cosmetic",
        },
        {
          title: "Juvederm®",
          category: "Cosmetic",
        },
        {
          title: "Kybella®",
          category: "Cosmetic",
        },
        {
          title: "Microneedling",
          category: "Cosmetic",
        },
        {
          title: "Novathreads",
          category: "Cosmetic",
        },
        {
          title: "Photorejuvenation",
          category: "Cosmetic",
        },
        {
          title: "PRP",
          category: "Cosmetic",
        },
        {
          title: "Restylane®",
          category: "Cosmetic",
        },
        {
          title: "Restylane Lift®",
          category: "Cosmetic",
        },
        {
          title: "Restylane Silk®",
          category: "Cosmetic",
        },
        {
          title: "Rosacea",
          category: "Cosmetic",
        },
        {
          title: "Scars",
          category: "Cosmetic",
        },
        {
          title: "Sclerotherapy / Leg Veins",
          category: "Cosmetic",
        },
        {
          title: "SculpSure®",
          category: "Injectables",
        },
        {
          title: "Sculptra",
          category: "Cosmetic",
        },
        {
          title: "Stretch Marks",
          category: "Cosmetic",
        },
        {
          title: "Sun Spots",
          category: "Cosmetic",
        },
        {
          title: "Volbella®",
          category: "Cosmetic",
        },
        {
          title: "Vollure®",
          category: "Cosmetic",
        },
        {
          title: "Voluma®",
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
