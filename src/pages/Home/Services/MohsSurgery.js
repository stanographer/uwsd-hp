import React from "react";
import Index from "./Index";
import bg from "../../../images/office/office-1-cut.jpg";
import bgTiny from "../../../images/office/office-1-cut-tiny.jpg";
import image from "../../../images/office/mohs.jpg";
import imageTiny from "../../../images/office/mohs-tiny.jpg";

class MohsSurgery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Mohs Surgery",
      sectionHeader: false,
      plural: false,
      bg,
      bgTiny,
      image,
      imageTiny,
      description:
        "Mohs surgery is considered the most effective technique for treating many basal cell carcinomas (BCCs) and squamous cell carcinomas (SCCs), the two most common types of skin cancer. Sometimes called Mohs micrographic surgery, the procedure is done in stages, including lab work, while the patient waits. This allows the removal of all cancerous cells for the highest cure rate while sparing healthy tissue and leaving the smallest possible scar.",
      treatmentDescription: "",
      additionalInfo: (
        <React.Fragment>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F6TxdvjPk5I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Medical", link: "#" },
        { id: 3, name: "Mohs Surgery", link: "/mohs-surgery" },
      ],
      signs: [],
      treatments: [
        {
          title: "Mohs Surgery",
          description: (
            <React.Fragment>
              <p>
                It's helpful to know what to expect before you undergo any
                surgical procedure. Because the Mohs surgery procedure for skin
                cancer removal is somewhat complex, it can be reassuring to
                become familiar with the treatment process ahead of time. Here,
                you can learn what to expect before, during, and after your
                procedure. Mohs surgery is the most effective treatment for most
                types of skin cancer.
              </p>
            </React.Fragment>
          ),
        },
        {
          title: "Before Your Surgery",
          description: (
            <React.Fragment>
              <p>
                When you meet with a surgeon for a consultation or when the
                biopsy results are discussed over the phone, you determine
                together whether a Mohs surgical procedure is the best course of
                action for your cancer. Once you have set an appointment for
                surgery, you receive a detailed list of instructions to follow
                beforehand. You may be asked to:
              </p>
              <ul>
                <li>
                  Temporarily stop the use of certain medications, including
                  some over-the-counter pain relievers, supplements, and other
                  medicines
                </li>
                <li>
                  Stop consuming certain foods or beverages a number of hours
                  before your procedure
                </li>
                <li>Stop smoking</li>
                <li>
                  Clear a full day for your procedure, because it is difficult
                  to predict how long it may take
                </li>
              </ul>
              <p className="mb-4">
                Your surgeon and her team will give you more information about
                these and other considerations before your surgery, and it's
                important to follow this advice as closely as you can to ensure
                a successful outcome.
              </p>
              <p className="mt-lg-4">
                <a href="/mohs-preop-instructions.pdf" class="btn btn-primary">
                  Mohs Pre-Op Instructions
                </a>
              </p>
            </React.Fragment>
          ),
        },
        {
          title: "Your Mohs Procedure",
          description: (
            <React.Fragment>
              <p>
                Surgeons usually perform Mohs skin cancer surgery as an
                outpatient procedure in the office, which has an on-site
                surgical suite and a laboratory for microscopic examination of
                tissue. Typically, surgery starts early in the morning and is
                completed the same day, depending on the extent of the tumor and
                the amount of reconstruction necessary.
              </p>
              <p>
                You receive local anesthesia around the area of the tumor, so
                you are awake during the entire procedure. The use of local
                anesthesia provides numerous benefits, including preventing a
                lengthy recovery and possible side effects from general
                anesthesia. You are completely numb in the area of the surgery,
                though, so the procedure is comfortable.
              </p>
              <p>
                After the area has been numbed, your surgeon removes the visible
                tumor, along with a thin layer of surrounding tissue. A
                technician then prepares this tissue and puts it on slides for
                your surgeon to examine under a microscope. If the surgeon sees
                evidence of cancer around the outer edges of the removed tissue,
                he or she takes another layer of tissue from the area where the
                cancer was detected. This ensures that only cancerous tissue is
                removed during the procedure, minimizing the loss of healthy
                tissue. Your surgeon repeats these steps until all samples are
                free of cancer. Although there are always exceptions to the
                rule, most tumors require 1 to 3 stages for complete removal.
              </p>
              <p>
                To get a better picture of how this process takes place, please
                view our guide,{" "}
                <a href="https://www.youtube.com/watch?v=F6TxdvjPk5I">
                  <strong>The Mohs Step-by-Step Process</strong>
                </a>
                .
              </p>
            </React.Fragment>
          ),
        },
        {
          title: "After Your Surgery",
          description: (
            <React.Fragment>
              <p>
                When your surgery is complete, your Mohs surgeon assesses the
                wound and discusses your options for ideal functional and
                cosmetic reconstruction. Surgeons understand that a good
                cosmetic result is an important part of the recovery process,
                and that's why they work so hard to leave as little tissue
                damage as possible. If reconstruction is necessary, the Mohs
                surgeon usually repairs the area the same day as the tumor
                removal.
              </p>
              <p>
                Watch the video to learn why Mohs surgery is the most effective
                treatment available.
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

export default MohsSurgery;
