// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";
import SectionTitle from "../../../components/Shared/section-title";
import TeamBox from "../../../components/Shared/team-box";

// import images
import bg from "../../../images/stock/physicians_bg.jpg";
import bgTiny from "../../../images/stock/physicians_bg_tiny.jpg";
import Cossman from "../../../images/team/avatars/jack-cossman.jpg";
import Travis from "../../../images/team/avatars/lisa-travis.jpg";
import Asrani from "../../../images/team/avatars/falguni-asrani.jpg";
import Yagerman from "../../../images/team/avatars/sarah-yagerman.jpg";
import Donnelley from "../../../images/team/avatars/naomi-donnelley.jpg";
import Arteaga from "../../../images/team/avatars/debbie-arteaga.jpg";
import CossmanTiny from "../../../images/team/avatars/jack-cossman-tiny.jpg";
import TravisTiny from "../../../images/team/avatars/lisa-travis-tiny.jpg";
import AsraniTiny from "../../../images/team/avatars/falguni-asrani-tiny.jpg";
import YagermanTiny from "../../../images/team/avatars/sarah-yagerman-tiny.jpg";
import DonnelleyTiny from "../../../images/team/avatars/naomi-donnelley-tiny.jpg";
import ArteagaTiny from "../../../images/team/avatars/debbie-arteaga-tiny.jpg";

class PageTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Our Practice", link: "#" },
        { id: 3, name: "Physicians", link: "/physicians" },
      ],
      candidates: [
        {
          id: 1,
          image: Travis,
          imageTiny: TravisTiny,
          name: "Dr. Lisa Travis",
          designation: "Board-Certified Dermatologist",
          salary: "2300",
          link: "",
          socialIds: [
            { icon: "mdi-magnify", link: "#" },
            { icon: "mdi-linkedin-box", link: "#" },
          ],
        },
        {
          id: 2,
          image: Cossman,
          imageTiny: CossmanTiny,
          name: "Dr. Jack Cossman",
          designation: "Board-Certified Dermatologist",
          salary: "1950",
          link: "",
          socialIds: [
            { icon: "mdi-magnify", link: "#" },,
            { icon: "mdi-linkedin-box", link: "#" },
          ],
        },
        {
          id: 3,
          image: Asrani,
          imageTiny: AsraniTiny,
          name: "Dr. Falguni Asrani",
          designation: "Board-Certified Dermatologist",
          salary: "2540",
          link: "",
          socialIds: [
            { icon: "mdi-magnify", link: "#" },
            { icon: "mdi-linkedin-box", link: "#" },
          ],
        },
        {
          id: 4,
          image: Donnelley,
          imageTiny: DonnelleyTiny,
          name: "Dr. Naomi Donnelley",
          designation: "Board-Certified Dermatologist",
          link: "",
          socialIds: [
            { icon: "mdi-magnify", link: "#" },,
            { icon: "mdi-linkedin-box", link: "#" },
          ],
        },
        {
          id: 5,
          image: Yagerman,
          imageTiny: YagermanTiny,
          name: "Dr. Sarah Yagerman",
          designation: "Mohs Surgeon",
          link: "",
          socialIds: [
            { icon: "mdi-magnify", link: "#" },,
            { icon: "mdi-linkedin-box", link: "#" },
          ],
        },
        {
          id: 6,
          image: Arteaga,
          imageTiny: ArteagaTiny,
          name: "Debbie Arteaga",
          designation: "Medical and Cosmetic Aesthetician",
          link: "",
          socialIds: [
            { icon: "mdi-magnify", link: "#" },
            { icon: "mdi-linkedin-box", link: "#" },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);

    var teambox = document.getElementsByName("team");
    for (var i = 0; i < teambox.length; i++) {
      teambox[i].classList.remove("rounded");
      teambox[i].classList.remove("bg-white");
      teambox[i].classList.remove("pt-3");
    }
  }
  // Make sure to remove the DOM listener when the component is unmounted.
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
          title="Physicians"
          bgSrc={bg}
          bgTiny={bgTiny}
          bgPositioning="center center"
          pathItems={pathItems}
        />

        <section className="section-2">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              desc="Our team of board-certified dermatologists is experienced with both the fundamental and latest treatments in medical, pediatric, surgical, and cosmetic dermatology. Each dermatologist contributes unique skills, and we collaborate to deliver comprehensive and individualized care to every patient."
            />

            <Row>
              {/* teambox */}
              <TeamBox candidates={this.state.candidates} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageTeam;
