import React from "react";
import Index from "./Index";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import image from "../../../images/office/icon-laser.jpg";
import imageTiny from "../../../images/office/icon-laser-tiny.jpg";
import bg from "../../../images/stock/devices-cosmetic.jpg";
import bgTiny from "../../../images/stock/devices-cosmetic-tiny.jpg";

class ConditionsCosmetic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Devices & Lasers",
      plural: true,
      bg,
      bgTiny,
      bgPositioning: "center center",
      image,
      imageTiny,
      description:
        "Our office is equipped with state-of-the art equipment and devices our doctors will provide you with the best outcomes from your treatment.",
      treatmentDescription: "",
      pathItems: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Medical", link: "#" },
        { id: 3, name: "Devices", link: "#" },
      ],
      signs: [],
      sectionTitle: "Modern. Effective. Proven.",
      devices: [
        {title: "Icon™ 1540 Fractional Laser", link: "/"},
        {title: "Icon™ Max G™ IPL (Intense Pulsed Light)", link: "/"},
        {title: "LightSheer®", link: "/"},
        {title: "Omnilux Revive™ Light Therapy", link: "/"},
        {title: "SkinPen® Precision Microneedling", link: "/"},
        {title: "SculpSure®", link: "/"},
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default ConditionsCosmetic;
