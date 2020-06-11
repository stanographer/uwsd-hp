import React from "react";
import Index from "./Index";
import image from "../../../images/conditions/skin_cancer_screening.jpg";
import imageTiny from "../../../images/conditions/skin_cancer_screening_tiny.jpg";
import bg from "../../../images/stock/skin_cancer_screening_bg.jpg";
import bgTiny from "../../../images/stock/skin_cancer_screening_bg_tiny.jpg";

class SkinCancerScreening extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Skin Cancer Screening",
      plural: false,
      bg,
      bgTiny,
      bgPositioning: "center top",
      image,
      imageTiny,
      description:
        "Skin cancer — the abnormal growth of skin cells — most often develops on skin exposed to the sun. But this common form of cancer can also occur on areas of your skin not ordinarily exposed to sunlight. There are three major types of skin cancer — basal cell carcinoma, squamous cell carcinoma and melanoma.",
      pathItems: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Medical", link: "#" },
        {
          id: 3,
          name: "Skin Cancer Screening",
          link: "/skin-cancer-screening",
        },
      ],
      signs: [],
      treatments: [
        {
          title: "Skin Cancer Screening",
          description: (
            <React.Fragment>
              <p>
                A skin cancer screening is a visual inspection of your skin by a
                Dermatologist. No blood work is conducted at a screening.
                Screenings take approximately 15 minutes, at your screening,
                your doctor will assess your skin type and family history to
                determine your susceptibility to developing skin cancer.
              </p>
              <p>
                Then, they will conduct a head-to-toe, full-body examination to
                look for any suspicious moles or growths that could indicate a
                cancerous or pre-cancerous condition. The Doctor will use a
                dermatoscope, a hand-held device that enables a deeper look into
                the skin, to aid in the diagnosis of suspicious lesions.
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

export default SkinCancerScreening;
