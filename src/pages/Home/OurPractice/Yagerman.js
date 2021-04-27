import React from "react";

// Import Components
import Index from "./Index";

// Import Images

import image from "../../../images/team/sarah-yagerman.jpg";
import imageTiny from "../../../images/team/sarah-yagerman-tiny.jpg";
import bg from "../../../images/stock/physician_page_bg.jpg";
import bgTiny from "../../../images/stock/physician_page_bg_tiny.jpg";

class Acne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dr. Sarah Yagerman",
      title: "Board-Certified Dermatologist, Mohs Surgeon",
      plural: false,
      bg,
      bgPositioning: "center center",
      bgTiny,
      image,
      imageTiny,
      description: (
        <React.Fragment>
          <p>
            Dr. Sarah Yagerman is a board-certified dermatologist and
            fellowship-trained Mohs micrographic surgeon. She practices medical,
            cosmetic, and surgical dermatology in NYC and has a special interest
            in dermatologic oncology. A skilled, caring practitioner, she
            believes in an individualized and holistic approach to each patient
            and their skin. She enjoys all aspects of dermatology. She is
            skilled in the use of lasers to treat various conditions including
            Melasma, Photoaging, tattoos and Rosacea. She has trained
            extensively with injectable fillers including Juvederm, Restylane
            and sculptra, and neuromodulators like Botox, Xeomin and Dysport.
          </p>
          <p>
            Dr. Yagerman is a native New Yorker; she returned home from Cornell
            University in Ithaca, NY to complete her medical degree at Weill
            Cornell Medical College in NYC, and she graduated with honors in
            service. She then completed a year of dedicated dermatologic surgery
            research at Memorial Sloan Kettering Cancer Center.
          </p>
          <p>
            After medical school, she moved downtown to complete an intensive
            Internal Medicine intern year at NYU Langone Health, which was
            followed by her 3-year dermatology residency at NYU’s prestigious
            Ronald O. Perelman Department of dermatology. She served as Chief
            resident in her final residency year and continued to develop a
            passion for dermatology and research. She has over 20 peer-reviewed
            publications in cosmetic and dermatologic surgery.
          </p>
          <p>
            She continued her training by completing an ACGME accredited
            fellowship in Mohs micrographic surgery and dermatologic oncology at
            Skin Laser and Surgery Specialists of NY and NJ. A lifelong learner
            and educator, Dr. Yagerman is proud to return to NYU to serve as
            Voluntary Faculty, where she volunteers weekly with residents,
            teaching surgical skills and overseeing clinic.
          </p>
          <p>
            In her free time, Dr. Yagerman loves to cook, garden, run, and spend
            time her family. She came to running later in life and sincerely
            hopes there will be public races again in the near future!
          </p>
          <a href="https://www.zocdoc.com/doctor/sarah-yagerman-md-317368?LocIdent=-1&isNewPatient=false&reason_visit=-1&referrerType=Widget&utm_medium=JSWidget&utm_source=ProviderWebsite&widget=false"
            className="btn btn-primary mt-2 mr-1"
            target="_blank">Make an appointment with Dr. Yagerman</a>
          
        </React.Fragment>
      ),
      pathItems: [
        { id: 1, name: "Home", link: "/index" },
        { id: 2, name: "Our Practice", link: "#" },
        { id: 3, name: "Physicians", link: "/ physicians" },
        { id: 4, name: "Dr. Sarah Yagerman", link: "/sarah-yagerman" },
      ],
    };
  }

  render() {
    return <Index data={this.state} />;
  }
}

export default Acne;
