import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/jeanette-soriano.jpg";
import imageTiny from "../../../images/team/jeanette-soriano.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Soriano extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jeanette Soriano",
      title: "",
      plural: false,
      bg,
      bgPositioning: "center center",
      bgTiny,
      image,
      imageTiny,
      description: (
        <React.Fragment>
          <p></p>
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Our Practice", link: "/our-practice" },
        { id: 3, name: "Physicians", link: "/our-practice" },
        { id: 4, name: "Dr. Naomi Donnelley", link: "/lisa-travis" },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Soriano;
