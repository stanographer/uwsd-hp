import React from "react";
import Index from "./Index";
import image from "../../../images/conditions/botox_and_dysport.jpg";
import imageTiny from "../../../images/conditions/botox_and_dysport_tiny.jpg";
import bg from "../../../images/stock/botox_and_dysport_bg.jpg";
import bgTiny from "../../../images/stock/botox_and_dysport_bg_tiny.jpg";

class Acne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Botox & Dysport",
      plural: true,
      bg,
      bgTiny,
      bgPositioning: "center center",
      image,
      imageTiny,
      description:
        "Botox and Dysport block signals from the nerves to the muscles. The injected muscle can't contract. That makes the wrinkles relax and soften. Botox and Dysport are most often used on forehead lines, crow's feet (lines around the eye), and frown lines.",
      treatmentDescription:
        "Treatments for acne are available, including lifestyle changes, medications, and medical procedures. Eating fewer simple carbohydrates such as sugar may minimize the condition. Treatments applied directly to the affected skin, such as azelaic acid, benzoyl peroxide, and salicylic acid, are commonly used.",
      pathItems: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Cosmetic", link: "#" },
        { id: 3, name: "Botox & Dysport", link: "/botox-and-dysport" },
      ],
      signs: [],
      treatments: [
        {
          title: "Botox",
          description: (
            <React.Fragment>
              <p>
                BOTOX® targets one of the underlying causes of frown lines and
                crow’s feet—the repeated muscle contractions from facial
                expression over time. Your doctor will inject these facial
                muscles with BOTOX ® to temporarily reduce muscle activity.
              </p>
              <div className="content position-relative p-4">
                <ul className="job-facts list-unstyled">
                  <li className="list-inline-item text-muted">
                    <i className="mdi mdi-check text-success mr-1"></i> Reduces
                    fine lines and wrinkles.
                  </li>
                  <br />
                  <li className="list-inline-item text-muted">
                    <i className="mdi mdi-check text-success mr-1"></i> Can be
                    used to treat lazy eyes.
                  </li>
                  <br />
                  <li className="list-inline-item text-muted">
                    <i className="mdi mdi-check text-success mr-1"></i> Is known
                    to reduce migraines.
                  </li>
                  <br />
                  <li className="list-inline-item text-muted">
                    <i className="mdi mdi-check text-success mr-1"></i> A proven
                    treatment for Hyperhydrosis.
                  </li>
                </ul>
              </div>
              <p className="dark-purple">
                <em>What should I expect with treatment?</em>
              </p>
              <p>
                You may begin to notice results within 2 weeks for moderate to
                severe frown lines, with results lasting up to 4 months.
              </p>
            </React.Fragment>
          ),
        },
        {
          title: "Dysport",
          description: (
            <React.Fragment>
              <p>
                Dysport treats moderate to severe frown lines between the
                eyebrows by reducing specific muscle activity. Wrinkles are
                caused by repeated movements and muscle contractions.7 One
                injection into each of the 5 points between and above the
                eyebrows temporarily prevents muscle contractions that cause
                frown lines. In other words: natural-looking results that look
                and feel like you.
              </p>
              <p className="dark-purple">
                <em>Some more info about Dysport.</em>
              </p>
              <p>
                If you’re under 65 and seeking treatment to temporarily improve
                the look of wrinkles between the eyebrows, ask your specialist
                if Dysport is right for you. But before you begin, read below to
                help you make the safest, most informed decision.
              </p>
            </React.Fragment>
          ),
        },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Acne;
