import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/debbie-arteaga.jpg";
import imageTiny from "../../../images/team/debbie-arteaga-tiny.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Arteaga extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Debbie Arteaga",
      title: "Aesthetician",
      plural: false,
      bg,
      bgPositioning: "center center",
      bgTiny,
      image,
      imageTiny,
      description: (
        <React.Fragment>
          <p>
            Debbie Arteaga is a talented medical and cosmetic Aesthetician
            working closely with New York dermatologists and plastic surgeons.
            She is licensed to practice in New York and New Jersey and has been
            providing high-quality care for patients since 2000. Debbie’s
            experience transcends traditional medical and cosmetic dermatology,
            thanks to her ever-growing knowledge of overall skin health.
          </p>
          <p>
            She is certified in Basic and Advanced Manual Lymphatic Drainage by
            the Vodder School and also holds a variety of different
            certifications in skin biology, advanced chemical peels, deep pore
            extractions, and exfoliation techniques. Debbie is dedicated to
            achieving long-lasting, natural-looking results using top skincare
            products and techniques. She incorporates the latest technologies in
            medical and cosmetic aesthetics when providing care for her
            patients.
          </p>
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Our Practice", link: "#" },
        { id: 3, name: "Physicians", link: "/physicians" },
        { id: 4, name: "Dr. Debbie Arteaga", link: "/debbie-arteaga" },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Arteaga;
