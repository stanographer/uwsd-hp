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
            Dr. Cossman is a board-certified dermatologist who practices
            medical, cosmetic, and surgical dermatology. As a member of the
            American Academy of Dermatology, Dr. Cossman loves all aspects of
            the specialty and welcomes patients of all ages and genders.
          </p>
          <p>
            Originally from the Philadelphia area, he spent over a decade in New
            England for his education and training. He attended both college and
            medical school at Brown University. Among all clinical experiences,
            dermatology was a perfect fit: combining many aspects of medicine
            and surgery, it also fulfilled his lifelong interests in the natural
            and physical sciences, aesthetics, and human diversity.
          </p>
          <p>
            After medical school, he completed his internship at Yale New Haven
            Hospital, and then returned to Providence for his dermatology
            residency at Roger Williams Medical Center. Starting in medical
            school and continuing through residency, he undertook various
            research projects and earned several awards. He also completed
            preceptorships in cosmetic and pediatric dermatology in Los Angeles
            and New York.
          </p>
          <p>
            As chief in his final year of residency, Dr. Cossman taught and
            trained junior residents and medical students. Passionate for
            dermatology and desiring to continue teaching, he is proudly on
            staff at New York University’s Department of Dermatology, where he
            teaches residents weekly.
          </p>
          <p>
            Beyond enjoying living in New York, Dr. Cossman ever endeavors to
            see and experience our amazing world. He has been to 34 countries
            and 40 states and is on a quest to visit them all. Enjoying camping
            and hiking, he is also aspiring to see all the National Parks,
            having visited 30 so far. Big Bend National Park in Texas is his
            favorite, although Great Sand Dunes in Colorado was spectacular,
            too.
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
