// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, UncontrolledTooltip } from "reactstrap";

// Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";
import SectionTitle from "../../../components/Shared/section-title";
import TeamBox from "../../../components/Shared/team-box";

// import images
import bg from "../../../images/stock/physicians_bg.jpg";
import bgTiny from "../../../images/stock/physicians_bg_tiny.jpg";
import Cossman from "../../../images/team/avatars/jack-cossman.jpg";
import Travis from "../../../images/team/avatars/lisa-travis.jpg";
import Asrani from "../../../images/team/avatars/falguni-asrani.jpg";
import Donnelley from "../../../images/team/avatars/naomi-donnelley.jpg";
import DonnelleyTiny from "../../../images/team/avatars/naomi-donnelley-tiny.jpg";
import Yagerman from "../../../images/team/avatars/sarah-yagerman.jpg";
import Arteaga from "../../../images/team/avatars/debbie-arteaga.jpg";
import CossmanTiny from "../../../images/team/avatars/jack-cossman-tiny.jpg";
import TravisTiny from "../../../images/team/avatars/lisa-travis-tiny.jpg";
import AsraniTiny from "../../../images/team/avatars/falguni-asrani-tiny.jpg";
import YagermanTiny from "../../../images/team/avatars/sarah-yagerman-tiny.jpg";
import ArteagaTiny from "../../../images/team/avatars/debbie-arteaga-tiny.jpg";
import Soriano from "../../../images/team/avatars/jeanette-soriano.jpg";
import SorianoTiny from "../../../images/team/avatars/jeanette-soriano-tiny.jpg";
import Bauer from "../../../images/team/avatars/katie-bauer.jpg";
import BauerTiny from "../../../images/team/avatars/katie-bauer-tiny.jpg";
import Abid from "../../../images/team/avatars/ammara-abid.jpg";
import AbidTiny from "../../../images/team/avatars/ammara-abid-tiny.jpg";
import Lauter from "../../../images/team/avatars/mia-lauter.jpg";
import LauterTiny from "../../../images/team/avatars/mia-lauter-tiny.jpg";
import Ouyang from "../../../images/team/avatars/janie-ouyang.jpg";
import OuyangTiny from "../../../images/team/avatars/janie-ouyang-tiny.jpg";
import Gonzalez from "../../../images/team/avatars/karla-gonzalez.jpg";
import GonzalezTiny from "../../../images/team/avatars/karla-gonzalez-tiny.jpg";
import discover from "../../../images/payments/payment/discover.jpg";
import mastercard from "../../../images/payments/payment/master-card.jpg";
import visa from "../../../images/payments/payment/visa.jpg";
import amaricanExpress from "../../../images/payments/payment/american-express.jpg";

class MeetTheStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Home", link: "/" },
        { id: 3, name: "Our Practice", link: "/our-practice" },
        { id: 3, name: "Meet The Staff", link: "/meet-the-staff" },
      ],
      assistants: [
        {
          id: 5,
          image: Ouyang,
          imageTiny: OuyangTiny,
          name: "Janie Ouyang",
          designation: "Medical Assistant Supervisor",
          link: "/janie-ouyang",
        },
        {
          id: 6,
          image: Abid,
          imageTiny: AbidTiny,
          name: "Ammara Abid",
          designation: "Senior Medical Assistant",
          link: "/ammara-abid",
        },
        {
          id: 7,
          image: Bauer,
          imageTiny: BauerTiny,
          name: "Katie Bower",
          designation: "Medical Assistant",
          link: "/katie-bower",
        },
        {
          id: 8,
          image: Lauter,
          imageTiny: LauterTiny,
          name: "Mia Lauter",
          designation: "Medical Assistant",
          link: "/mia-lauter",
        },
        {
          id: 9,
          image: Arteaga,
          imageTiny: ArteagaTiny,
          name: "Debbie Arteaga",
          designation: "Medical and Cosmetic Aesthetician",
          link: "/debbie-arteaga",
        },
      ],
      admin: [
        {
          id: 10,
          image: Gonzalez,
          imageTiny: GonzalezTiny,
          name: "Karla Gonzalez",
          designation: "Office Manager",
          link: "/karla-gonzalez",
        },
        {
          id: 11,
          image: Soriano,
          imageTiny: SorianoTiny,
          name: "Jeannette Soriano",
          designation: "Patient Care Coordinator",
          link: "/jeannette-soriano",
        },
      ],
      paymentMethods: [
        { method_id: 1, title: "Discover", id: "discover", icon: discover },
        {
          method_id: 2,
          title: "Master Card",
          id: "mastercard",
          icon: mastercard,
        },
        { method_id: 3, title: "Visa", id: "visa", icon: visa },
        {
          method_id: 4,
          title: "American Express",
          id: "amaricanExpress",
          icon: amaricanExpress,
        },
      ],
    };
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    const { pathItems } = this.state;
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb
          title="Our Practice"
          bgSrc={bg}
          bgTiny={bgTiny}
          bgPositioning="center center"
          pathItems={pathItems}
        />

        <section className="section" id="physicians">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Meet The Staff"
              desc="Our staff will ensure you get the best possible care."
              isLeft={false}
            />
            <Row>
              <TeamBox candidates={this.state.assistants} />
            </Row>
            <hr />
            <Row>
              <TeamBox candidates={this.state.admin} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default MeetTheStaff;
