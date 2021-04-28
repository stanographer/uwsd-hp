import React from "react";
import Index from "./Index";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import image from "../../../images/conditions/botox_and_dysport.jpg";
import imageTiny from "../../../images/conditions/botox_and_dysport_tiny.jpg";
import bg from "../../../images/stock/botox_and_dysport_bg.jpg";
import bgTiny from "../../../images/stock/botox_and_dysport_bg_tiny.jpg";

class ConditionsCosmetic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Cosmetic Treatments",
      plural: true,
      bg,
      bgTiny,
      bgPositioning: "center center",
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
          name: "Cosmetic Treatments",
          link: "/cosmetic-conditions-procedures",
        },
      ],
      signs: [],
      sectionTitle: "We'll keep you in tip-top shape",
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
      treatments: [
        {
          title: "Conditions",
          description: (
            <>
            <Row className="flex">
              <Col xs={12} sm={4}>
                Acne Scars
              </Col>
              <Col xs={12} sm={4}>
                Body Contouring and Sculpting
              </Col>
              <Col xs={12} sm={4}>Wrinkles</Col>
              <Col xs={12} sm={4}>
                Keloids
              </Col>
              <Col xs={12} sm={4}>
                Red Spots
              </Col>
              <Col xs={12} sm={4}>Acne</Col>
            </Row>
            </>
          ),
        },
        {
          title: "Lasers and Devices",
          description: (
            <>
              <ul>
                <li>SculpSure®</li>
                <li>LightSheer®</li>
                <li>DESIRE™ Icon™ 1540 Fractional Laser</li>
                <li>Icon™ Max G™ IPL (Intense Pulsed Light)</li>
                <li>SkinPen® Precision Microneedling</li>
              </ul>
            </>
          ),
        },
        {
          title: "Surface Texturing",
          description: (
            <>
              <ul>
                <li>Chemical Peels</li>
                <li>Facials</li>
                <li>Microneedling</li>
              </ul>
            </>
          ),
        },
        {
          title: "Injectables",
          description: (
            <>
              <ul>
                <li>Botox</li>
                <li>Dysport</li>
                <li>Kybella</li>
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

export default ConditionsCosmetic;
