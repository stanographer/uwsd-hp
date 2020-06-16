import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/naomi-donnelley.jpg";
import imageTiny from "../../../images/team/naomi-donnelley-tiny.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Donnelley extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dr. Naomi Donnelley",
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
            Dr. Naomi Donnelley, a board certified dermatologist with 13 years
            of post-residency experience in both academic and private practice
            settings, specializes in general medical, surgical and cosmetic
            dermatology. She sees both adult and pediatric patients.
          </p>
          <p>
            Dr. Donnelley graduated from Yale University, magna cum laude, with
            a BA in Biology. She then went on to attend Yale University School
            of Medicine. She completed her internship in internal medicine at
            The Mount Sinai Medical Center in NYC, and her dermatology residency
            at Northwestern University in Chicago where she was Chief Resident.
            She is a fellow of the American Academy of Dermatology and member of
            the AOA Medical Honor Society. She has been active in various
            regional dermatology societies over the years, and served on the
            Quality Control Committee for 5 years while practicing at
            Northwestern.
          </p>
          <p>
            After residency, Dr. Donnelley worked as a Clinical Associate
            Professor at The Northwestern Memorial Physicians Group for over 6
            years. When Chicago winters became too much, she and her family
            explored living and working in Santa Barbara, California and
            Charleston, SC. While they thoroughly enjoyed both places, they are
            happy to return to Dr. Donnelley’s hometown of New York City.
          </p>
          <p>
            Dr. Donnelley prides herself on her meticulous care and positive
            relationships with her patients. She is comfortable with both basic
            dermatological conditions like acne and warts, and also with more
            complicated medical dermatological conditions that require systemic
            medications and coordination with rheumatologists, allergists,
            plastic surgeons and more. Surgery and procedural dermatology are
            some of Dr. Donnelley’s fortes. She has diagnosed and excised
            hundreds of malignant and benign neoplasms. When it comes to
            cosmetic dermatology, she believes in a less is more approach to
            achieve a very natural look with botox, fillers and lasers. She
            takes her time to give her patients a fresh and youthful look
            without appearing “done.” She encourages patients to bring in photos
            from when they were younger to help guide treatment.
          </p>
          <p>
            In her free time, she enjoys spending time with her husband, three
            children and 2 dogs, and enjoys travel, any activities involving
            water, fine dining and reading.
          </p>
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

export default Donnelley;
