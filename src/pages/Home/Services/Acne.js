import React from "react";
import Index from "./Index";
import image from "../../../images/conditions/acne.jpg";
import imageTiny from "../../../images/conditions/acne_tiny.jpg";
import bg from "../../../images/stock/acne_bg.jpg";
import bgTiny from "../../../images/stock/acne_bg_tiny.jpg";

class Acne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Acne",
      plural: false,
      bg,
      bgTiny,
      image,
      imageTiny,
      description:
        "Acne, also known as acne vulgaris, is a long-term skin disease that occurs when dead skin cells and oil from the skin clog hair follicles. Typical features of the condition include blackheads or whiteheads, pimples, oily skin, and possible scarring.",
      treatmentDescription:
        "Treatments for acne are available, including lifestyle changes, medications, and medical procedures. Eating fewer simple carbohydrates such as sugar may minimize the condition. Treatments applied directly to the affected skin, such as azelaic acid, benzoyl peroxide, and salicylic acid, are commonly used.",
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Medical", link: "#" },
        { id: 3, name: "Acne", link: "/acne" },
      ],
      signs: [],
      treatments: [
        {
          title: "Acne Surgery",
          description: (
            <React.Fragment>
              <p>
                Acne surgery is a treatment performed by the dermatologist or
                aesthetician in our office working under the supervision of the
                dermatologist. The purpose is to professionally cleanse the
                skin, extract blackheads and whiteheads and clean clogged pores.
                Acne surgery helps to reduce current acne outbreaks. Patients
                receiving acne surgery treatments must continue to have periodic
                visits with the dermatologist for acne management. Acne
                surgeries are often covered by insurance.
              </p>
            </React.Fragment>
          ),
        },
        {
          title: "BLU-U Light Photodynamic Therapy",
          description: (
            <React.Fragment>
              <p>
                The BLU-U is a unique blue light that kills the P. acnes
                bacteria in your skin. Treatments are simple – you sit with your
                face close to the light for a short time at a schedule set up by
                our dermatologists, approximately a 17-minute session about once
                or twice per week. The treatments may go on for five weeks or
                so. It’s safe, it’s not hot, it’s not painful. After some weeks,
                the blue light can help control your acne.
              </p>
              <p className="dark-purple">
                <em>An Innovative Way to Control Moderate Acne.</em>
              </p>
              <p>
                Not exclusive to teenagers, many young adults, people in their
                20’s and 30’s, have trouble with acne that is hard to control.
                We know there are many acne treatments out there for you to try
                and it can be overwhelming. If you have moderate acne and are
                uncomfortable taking antibiotics or are unhappy with your
                current topical treatment results, BLU-U® blue light therapy –
                using light without drugs or antibiotics – may be something for
                you to try.
              </p>
            </React.Fragment>
          ),
        },
        {
          title: "Isotretinoin (Accutane)",
          description: (
            <React.Fragment>
              <p>
                Isotretinoin is a powerful drug used in the treatment of acne.
                Four to Six months of Accutane treatment usually leads to
                clearing of acne. Accutane is needed for moderate to severe acne
                that has failed other treatments. While it can have side
                effects, in some ways it is safer than long-term antibiotic
                usage. Over two million people have taken this drug, so a lot is
                known about its safety and effectiveness.
              </p>
              <p>
                About 85% of patients see their skin permanently clear after one
                course of treatment. Some patients do not clear after one course
                of treatment, and a second course of treatment may be an option.
                The skin often continues to clear for a while after patients
                stop taking the medicine.
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
