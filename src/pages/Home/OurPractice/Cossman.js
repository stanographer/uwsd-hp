import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/jack-cossman.jpg";
import imageTiny from "../../../images/team/jack-cossman-tiny.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Cossman extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dr. Jack Cossman",
      title: "Board-Certified Dermatologist",
      plural: false,
      bg,
      bgPositioning: "center center",
      bgTiny,
      image,
      imageTiny,
      description: (
        <React.Fragment>
          <p>
            Dr. Jack Cossman is a board-certified dermatologist who practices
            medical, cosmetic, and surgical dermatology. As a fellow of the
            American Academy of Dermatology, Dr. Cossman loves all aspects of
            the specialty and welcomes patients of all ages. He has particular
            interests in treating acne &amp; acne scarring, vitiligo, and
            psoriasis, in addition to skin rejuvenation using chemical peels,
            PRP, lasers, and injectables. Committed to the best care of
            patients, he strives to offer the best combination of traditional
            and modern treatment options for any patient's needs.
          </p>
          <p>
            Originally from Philadelphia, he spent over a decade in New England
            for his education and training. He attended both college and medical
            school at Brown University. Among all clinical experiences,
            dermatology was a perfect fit: combining many aspects of medicine
            and surgery, it also fulfilled his lifelong interests in the natural
            and physical sciences, aesthetics, and human diversity. After
            medical school, he completed his internship at Yale New Haven
            Hospital, and then returned to Providence for his dermatology
            residency at Roger Williams Medical Center.
          </p>
          <p>
            In addition to seeing patients at Upper West Side Dermatology, Dr.
            Cossman is also a clinical instructor for the residency program at
            New York University’s Department of Dermatology in Bellevue
            Hospital. With dedication to the science and practice of
            dermatology, he also has extensive experience in clinical trials and
            research.
          </p>
          <p>
            Outside of his professional life, Dr. Cossman and his chihuahua love
            exploring our amazing world. He has been to 35 countries and 49
            states (just missing Iowa), as well as 51 of the 63 U.S. National
            Parks.
          </p>
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Our Practice", link: "/our-practice" },
        { id: 3, name: "Physicians", link: "/our-practice" },
        { id: 4, name: "Dr. Jack Cossman", link: "/lisa-travis" },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Cossman;
