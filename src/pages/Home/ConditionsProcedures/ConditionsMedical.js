import React from "react";
import Index from "./Index";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import image from "../../../images/stock/medical.jpg";
import imageTiny from "../../../images/stock/medical-tiny.jpg";
import bg from "../../../images/stock/medical-bg.jpg";
import bgTiny from "../../../images/stock/medical-bg-tiny.jpg";

class ConditionsMedical extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Conditions We Treat",
      plural: true,
      bg,
      bgTiny,
      bgPositioning: "center",
      image,
      imageTiny,
      description:
        "We offer compassionate treatment for a variety of procedures using cutting-edge technology. Our team of certified dermatologists, laser professionals, and Mohs surgeons will ensure you receive the best care and follow-up for your needs.",
      treatmentDescription: "",
      pathItems: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Cosmetic", link: "#" },
        {
          id: 3,
          name: "Conditions We Treat",
          link: "/cosmetic-conditions-procedures",
        },
      ],
      signs: [],
      sectionTitle: <React.Fragment>Personalized care for every<span className="text-primary">body</span></React.Fragment>,
      procedures: [
        {
          title: "Botox & Dysport",
          link: "/botox-and-dysport",
          // description:
          // "Makes it impossible for you to show emotion on your face.",
          category: "Injectables",
        },
        {
          title: "Fillers",
          link: "/fillers",
          // description: "Fill in those wrinkles!",
          category: "Injectables",
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
          category: "Injectables",
        },
        {
          title: "Kybella",
          link: "/kybella",
          // description: "Probably an advanced filler of some type.",
          category: "Injectables",
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
      ],
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
      treatments: [
        {
          title: "Conditions",
          description: (
            <>
              <Row className="flex">
                <Col xs={12} sm={4}>
                  Acne
                </Col>
                <Col xs={12} sm={4}>
                  Alopecia
                </Col>
                <Col xs={12} sm={4}>
                  Wrinkles
                </Col>
                <Col xs={12} sm={4}>
                  Basal Cell Carcinoma
                </Col>
                <Col xs={12} sm={4}>
                  Boils/Abscesses
                </Col>
                <Col xs={12} sm={4}>
                  Contact Dermatitis
                </Col>
              </Row>
            </>
          ),
        },
        {
          title: "Rashes",
          description: (
            <>
              <ul>
                <li>Photosensitivity/Sun-Induced Rashes</li>
                <li>Hives (Urticaria)</li>
              </ul>
            </>
          ),
        },
        {
          title: "Cancers",
          description: (
            <>
              <Row className="flex">
                <Col xs={12} sm={4}>
                  Basal Cell Carcinoma
                </Col>
                <Col xs={12} sm={4}>
                  Neoplasms
                </Col>
                <Col xs={12} sm={4}>
                  Wrinkles
                </Col>
                <Col xs={12} sm={4}>
                  Squamous Cell Carcinoma
                </Col>
                <Col xs={12} sm={4}>
                  Red Spots
                </Col>
                <Col xs={12} sm={4}>
                  Melanoma
                </Col>
              </Row>
            </>
          ),
        },
        {
          title: "Lasers and Devices",
          description: (
            <>
              <ul>
                <li>BLU-U® Blue Light Photodynamic Therapy</li>
                <li>LightSheer®</li>
                <li>Phototherapy NB-UVB</li>
              </ul>
            </>
          ),
        },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default ConditionsMedical;
