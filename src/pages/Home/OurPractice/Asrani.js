import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/falguni-asrani.jpg";
import imageTiny from "../../../images/team/falguni-asrani-tiny.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Asrani extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dr. Falguni Asrani",
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
            Dr. Falguni Asrani is a considerate and caring dermatologist based
            in New York City. She attended medical school at Dr. D.Y. Patil
            Medical College and subsequently did her dermatology residency at
            B.Y.L. Nair Medical College and Hospital, both in India. After
            moving to New York, Dr. Asrani did a dermatology residency at SUNY
            Downstate Medical Center in Brooklyn and ,subsequently, did a
            fellowship in Pediatric Dermatology at SUNY Downstate and then a two
            year fellowship at Mass General Hospital in Boston in laser research
            and as a Clinical Fellow. While at SUNY Downstate she was honored by
            being chosen to be the Dermatology Chief Resident. In addition to
            practicing general dermatology, Dr. Asrani also specializes in
            Pediatric Dermatology and in skin of color. She has special
            experience and training in dermatopathology, plastic surgery, diode
            laser and in cosmetic procedures such as chemical peels, Botox
            injections and microdermabrasion.
          </p>
          <p>
            Dr. Asrani is a board certified dermatologist and a Fellow of the
            American Academy of Dermatology and she has held various academic
            positions, including assistant medical officer, consultant, clinical
            instructor, and honorary visiting consultant. Dr. Asrani was awarded
            “Best Teacher Award” in dermatology in New York Methodist Hospital
            2016 and a “Certificate of Excellence” in Woodhull Medical Hospital,
            Brooklyn NY 2018.
          </p>
          <p>
            Dr. Asrani is uncompromising in her dedication to the well-being of
            her patients. She is committed to creating long-lasting
            relationships with her patients, providing them with the highest
            level of care.
          </p>
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Our Practice", link: "/our-practice" },
        { id: 3, name: "Physicians", link: "/our-practice" },
        { id: 4, name: "Dr. Falguni Asrani", link: "/lisa-travis" },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Asrani;
