import React from "react";
import Index from "./Index";
import bg from "../../../images/stock/corona.jpg";
import bgTiny from "../../../images/stock/corona-tiny.jpg";
import image from "../../../images/stock/grass.jpg";
import imageTiny from "../../../images/stock/grass-tiny.jpg";

class CovidProtocols extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Covid-19 Updates and Protocols",
      plural: true,
      bg,
      bgTiny,
      bgPositioning: "center center",
      description: (
        <>
          <p>
            While many things have changed since the start of the Covid-19
            outbreak, we are still committed to your safety and to providing
            quality care. We understand that you may have some concerns
            regarding returning to a doctor's office at this time. Rest assured
            that we are implementing strict safety procedures and following
            infection control recommendations advised by the CDC to protect both
            our patients and staff.
          </p>
          <p>As a result, we are applying the following measures:</p>
          <ul>
            <li>
              The office will be thoroughly cleaned and disinfected throughout
              the day.
            </li>
            <li>
              All patients will be required to answer screening questions{" "}
              <strong>prior</strong>{" "}
              to their visit and will be given a temperature check with a
              no-contact thermometer before entering the office. Our staff will
              be following the same protocol.
            </li>
            <li>
              All doctors and staff will be wearing appropriate protective
              equipment.
            </li>
            <li>
              All staff will change from commuter clothes after arriving at the
              office into scrubs that are laundered daily.
            </li>
            <li>
              <strong>
                All patients will be required to wear their own masks or face
                covering.
              </strong>
            </li>
            <li>Hand sanitizer will be available throughout the office.</li>
            <li>
              Social distancing measures will be enforced in the waiting area.
            </li>
            <li>
              To limit contact, we ask all new patients to fill out the required
              paperwork digitally. In-office payments will be taken by credit
              card, dictated to the front desk either in person or by phone.
            </li>
            <li>
              Appointments will be managed to allow for social distancing in
              between patients - this means you may be offered fewer options for
              scheduling an appointment.
            </li>
            <li>
              We ask that patients arrive at their appointments alone unless the
              presence of a guardian or caretaker is required.
            </li>
            <li>
              If you or someone you have had contact with is exhibiting flu-like
              symptoms such as fever, cough, shortness of breath, muscle aches,
              chills, or recent sustained loss of taste or smell, please do not
              schedule an appointment and contact your primary care provider.
            </li>
          </ul>
          <p>
            <em>
              We will continue to offer Virtual visits via Zoom, which will be
              the recommended option for patients who prefer to have a virtual
              visit, or do not require an in-person evaluation. If you are
              unsure of the type of visit appropriate for you, please contact
              our office for scheduling assistance.
            </em>
          </p>
        </>
      ),
      treatmentDescription: "",
      image,
      imageTiny,
      pathItems: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Cosmetic", link: "#" },
        { id: 3, name: "Botox & Dysport", link: "/botox-and-dysport" },
      ],
      signs: [],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default CovidProtocols;
