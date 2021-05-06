import React from "react";
import Index from "./Index";
import image from "../../../images/office/phototherapy.jpg";
import imageTiny from "../../../images/office/phototherapy-tiny.jpg";
import bg from "../../../images/stock/devices-medical.jpg";
import bgTiny from "../../../images/stock/devices-medical-tiny.jpg";

class ConditionsCosmetic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Medical Devices",
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
        {title: "Omnilux Blue™ Light Therapy", link: "/"},
        {title: "Phototherapy NB-UVB", link: "/"}
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default ConditionsCosmetic;
