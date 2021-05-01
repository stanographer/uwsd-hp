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
