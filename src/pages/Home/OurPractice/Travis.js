import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/lisa-travis.jpg";
import imageTiny from "../../../images/team/lisa-travis-tiny.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Travis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dr. Lisa Travis",
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
            Dr. Lisa Travis is a board-certified dermatologist with a decade of
            experience making New Yorkers look and feel better in their own
            skin. Dr. Travis was selected in 2013-2014 and 2018-2021 for the New
            York Times Magazine’s list of New York “Super Doctors”, which is
            limited to five percent of the region’s active physicians. This
            honor is based on a survey of other physicians in the NY area as to
            whom they would choose for their own medical care.
          </p>
          <p>
            Dr. Travis came to dermatology from an artistic background, having
            studied design and architecture as well as science at Cornell
            University. After completing her Bachelor’s degree, she decided to
            pursue her medical degree at the State University of New York in
            Brooklyn. She soon found that dermatology was the perfect medium for
            her to merge her visual sensibilities with her passion for
            positively impacting people’s lives.
          </p>
          <p>
            Dr. Travis’ philosophy is to embrace lifelong learning. “I initially
            decided to pursue medicine because I love science and health and get
            excited about learning new things in the field,” she says. “I always
            strive to keep up with advances, attend conferences, and learn from
            my peers.” She shares her love of learning by training future
            dermatologists at NYU Langone Medical Center, Department of
            Dermatology.
          </p>
          <p>
            She is an active member of professional societies including The
            American Academy of Dermatology and the American Society for
            Dermatologic Surgery. Patients return to Dr. Travis not just for her
            medical or cosmetic dermatology expertise, but also for her warm
            demeanor and thorough approach to their unique needs and concerns.
            “Medicine is a process in which we need to work together with the
            patient to provide the best care,” she says. In her free time, Dr.
            Travis loves to travel and spend time with her husband, three kids,
            and their adorable Labradoodle puppy, Hudson.
          </p>
          <a
            href="https://qwell.com/dermatology/lisa-travis-md"
            className="btn btn-primary mt-2 mr-1"
            target="_blank"
          >
            Make an appointment with Dr. Travis
          </a>
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Our Practice", link: "/our-practice" },
        { id: 3, name: "Physicians", link: "/our-practice" },
        { id: 4, name: "Dr. Lisa Travis", link: "/lisa-travis" },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Travis;
