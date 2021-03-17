// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, UncontrolledTooltip } from "reactstrap";

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

class OurPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Home", link: "/" },
        { id: 3, name: "Our Practice", link: "/our-practice" },
      ],
      physicians: [
        {
          id: 1,
          image: Travis,
          imageTiny: TravisTiny,
          name: "Dr. Lisa Travis",
          designation: "Board-Certified Dermatologist",
          link: "/lisa-travis",
        },
        {
          id: 2,
          image: Cossman,
          imageTiny: CossmanTiny,
          name: "Dr. Jack Cossman",
          designation: "Board-Certified Dermatologist",
          link: "/jack-cossman",
        },
        {
          id: 3,
          image: Asrani,
          imageTiny: AsraniTiny,
          name: "Dr. Falguni Asrani",
          designation: "Board-Certified Dermatologist",
          link: "/falguni-asrani",
        },
        {
          id: 4,
          image: Donnelley,
          imageTiny: DonnelleyTiny,
          name: "Dr. Naomi Donnelley",
          designation: "Board-Certified Dermatologist",
          link: "/naomi-donnelley",
        },
        {
          id: 5,
          image: Yagerman,
          imageTiny: YagermanTiny,
          name: "Dr. Sarah Yagerman",
          designation: "Mohs Surgeon",
          link: "/sarah-yagerman",
        },
      ],
      assistants: [
        {
          id: 9,
          image: Bauer,
          imageTiny: BauerTiny,
          name: "Katie Bauer",
          designation: "Medical Assistant",
          link: "/katie-bauer",
        },
        {
          id: 10,
          image: Ouyang,
          imageTiny: OuyangTiny,
          name: "Janie Ouyang",
          designation: "Medical Assistant",
          link: "/janie-ouyang",
        },
        {
          id: 11,
          image: Abid,
          imageTiny: AbidTiny,
          name: "Ammara Abid",
          designation: "Medical Assistant",
          link: "/ammara-abid",
        },
        {
          id: 12,
          image: Lauter,
          imageTiny: LauterTiny,
          name: "Mia Lauter",
          designation: "Medical Assistant",
          link: "/mia-lauter",
        },
        {
          id: 8,
          image: Arteaga,
          imageTiny: ArteagaTiny,
          name: "Debbie Arteaga",
          designation: "Medical and Cosmetic Aesthetician",
          link: "/debbie-arteaga",
        },
      ],
      admin: [
        {
          id: 6,
          image: Gonzalez,
          imageTiny: GonzalezTiny,
          name: "Karla Gonzalez",
          designation: "Administrative",
          link: "/melissa-delfino",
        },
        {
          id: 7,
          image: Soriano,
          imageTiny: SorianoTiny,
          name: "Jeanette Soriano",
          designation: "Administrative",
          link: "/jeanette-soriano",
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
              title="World-Class Care"
              desc="Our team of board-certified dermatologists and specialists are experienced with both the fundamental and latest treatments in medical, pediatric, surgical, and cosmetic dermatology. Each dermatologist contributes unique skills, and we collaborate to deliver comprehensive and individualized care to every patient."
              isLeft={false}
            />
            <Row>
              <TeamBox candidates={this.state.physicians} />
            </Row>
            <hr />
            <Row>
              <TeamBox candidates={this.state.assistants} />
            </Row>
            <hr />
            <Row>
              <TeamBox candidates={this.state.admin} />
            </Row>
          </Container>
        </section>

        <section className="section bg-light" id="patient-information">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Patient Information"
              isLeft={false}
              desc={
                <a
                  href="/new-patient.pdf"
                  className="btn btn-primary mt-2 mr-1"
                >
                  Download New Patient Form
                </a>
              }
            />
            <Row>
              <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                <div className="job-box rounded shadow position-relative overflow-hidden">
                  <div className="border-bottom bg-white">
                    <h5 className="mb-0 p-4">Office Policies</h5>
                  </div>

                  <div className="content position-relative bg-white p-4">
                    <h6>Cancellations</h6>
                    <p>
                      Appointments must be cancelled within 24 hours to avoid a
                      $50.00 late cancellation/no show fee.
                    </p>
                    <h6>Languages Spoken</h6>
                    <ul className="job-facts list-unstyled">
                      <li className="text-muted">
                        <i className="mdi mdi-message-text-outline text-success mr-1"></i>{" "}
                        English
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-message-text-outline text-success mr-1"></i>{" "}
                        Spanish
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                <div className="job-box rounded shadow position-relative overflow-hidden">
                  <div className="border-bottom bg-white">
                    <h5 className="mb-0 p-4">Accepted Insurance Plans</h5>
                  </div>

                  <div className="content position-relative bg-white p-4">
                    <ul className="job-facts list-unstyled">
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Aetna
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Cigna
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Empire Blue Cross Blue Shield
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        United Healthcare
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Oxford Freedom/Choice Plus
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Oxford Liberty
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Medicare
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i> NYS
                        Empire Plan
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-check text-success mr-1"></i>{" "}
                        Multiplan/PHCS
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                <div className="job-box rounded shadow position-relative overflow-hidden">
                  <div className="border-bottom bg-white">
                    <h5 className="mb-0 p-4">Payments</h5>
                  </div>

                  <div className="content position-relative bg-white p-4">
                    <div className="mb-4">
                      <p>
                        Most major credit cards are accepted. It is mandatory
                        that we keep a credit card on file due to high
                        deductibles and co-insurance. You will be notified in
                        advance if the card on file will be charged.
                      </p>
                      {this.state.paymentMethods.map((paymentMethod, key) => (
                        <Link to="" key={key}>
                          <img
                            src={paymentMethod.icon}
                            className="img-fluid avatar avatar-small mr-3"
                            id={paymentMethod.id}
                            alt=""
                          />
                          <UncontrolledTooltip
                            placement="top"
                            target={paymentMethod.id}
                          >
                            {paymentMethod.title}
                          </UncontrolledTooltip>
                        </Link>
                      ))}
                    </div>
                    <p>
                      <strong>Please note:</strong> Cosmetic procedures and
                      treatments are not usually covered by insurance.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section" id="contact">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Contact"
              isLeft={false}
              desc={
                <a
                  href="/new-patient.pdf"
                  className="btn btn-primary mt-2 mr-1"
                >
                  Download New Patient Form
                </a>
              }
            />
            \
            <Row className="mt-4">
              <Col lg="4" md="4">
                <div className="map map-height-two rounded map-gray">
                  <iframe
                    className="rounded"
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1630711079783!2d-73.98658228432558!3d40.78042897932451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588a575394bb%3A0x33aab9cb577f98b3!2s277%20West%20End%20Ave%2C%20New%20York%2C%20NY%2010023!5e0!3m2!1sen!2sus!4v1591307857751!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>

              <Col lg="4" md="4" className="mt-4 pt-2">
                <div className="title-heading ml-lg-4">
                  <div className="contact-detail mt-3 mb-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-map-marker-outline text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Location</h4>
                      <div id="message">
                        277 West End Ave Suite 1B
                        <br />
                        New York, NY 10023
                        <br />
                        <span className="text-muted">
                          <em>(Entrance on 73rd Street)</em>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-email-variant text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Email</h4>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary h6"
                      >
                        uwsderm@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-phone text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Phone</h4>
                      <Link
                        to="#"
                        onClick={this.callOffice}
                        className="text-primary h6"
                      >
                        +1 212 769 0069
                      </Link>
                      <br />
                    </div>
                  </div>

                  <div className="contact-detail mt-3 mb-4">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-printer text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Fax</h4>
                      <Link
                        to="#"
                        onClick={this.callFax}
                        className="text-primary h6"
                      >
                        +1 212 769 0075
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="4" className="mt-4 pt-2">
                <div className="job-box rounded shadow position-relative overflow-hidden">
                  <div className="border-bottom bg-white">
                    <h5 className="mb-0 p-4">Hours</h5>
                  </div>

                  <div className="content position-relative bg-white p-4">
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Mon</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">830 am – 500 pm</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Tues</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">830 am – 700 pm</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Wed</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">830 am – 500 pm</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Thurs</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">830 am – 500 pm</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Fri</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">830 am – 500 pm</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Sat</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">1000 am – 200 pm</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <span className="h6 dark-purple">
                          <strong>Sun</strong>
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="h6">
                          <em>Closed</em>
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default OurPractice;
