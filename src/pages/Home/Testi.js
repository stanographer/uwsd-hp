// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";

//Slider
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

//Import Images
import client1 from "../../images/client/amazon.svg";
import client2 from "../../images/client/google.svg";
import client3 from "../../images/client/lenovo.svg";
import client4 from "../../images/client/paypal.svg";
import client5 from "../../images/client/shopify.svg";
import client6 from "../../images/client/shopify.svg";

class Testi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          name: "Thomas Israel",
          desc:
            "Maybe because it was an early morning appointment but I got taken right away (even early), the doctor came in shortly after & my whole appointment was done within a half hour. Very pleased & the doctor (along with all personnel & staff) were very nice.",
        },
        {
          id: 2,
          name: "Scarlett A.",
          desc:
            "The staff were very friendly and efficient all around! The office was very clean and the wait time for me was only 10 minutes! Dr. Travis was very kind and not rushed at all. I will definitely be returning here in the future if necessary.",
        },
        {
          id: 3,
          name: "Julie S.",
          desc:
            "Dr. Travis is excellent. She is extremely knowledgeable and very friendly. We worked out a treatment plan together and she reiterated that I can call any time with any questions I have or come back in with any concerns. I would HIGHLY recommend her to anyone looking for a dermatologist.",
        },
        {
          id: 4,
          name: "Julia H.",
          desc:
            "This was my first visit to this office…I recently switched insurance and needed to find a new dermatologist. Dr. Lisa Travis and her staff were great!! Everyone was very nice and helpful. Dr. Travis was thorough and also patient with my worries/questions/stress. I left feeling aware/informed and also comfortable with the treatment plan Dr. Travis decided on. Highly recommend!",
        },
        {
          id: 5,
          name: " Dean Tolle",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        },
        {
          id: 6,
          name: "Jami L.",
          desc:
            "She took time to really consider my past treatment and what we could do going forward. It has been a while since I felt a dermatologist has actually examined my skin so closely. I felt heard and am excited to begin my new course of treatment!",
        },
        {
            id: 7,
            name: "David S.",
            desc:
              "Excellent visit with good results! Very clean office and everyone from reception to the nurse to the doctor were very nice and professional. What a pleasant surprise to be treated like a human being again! Highly recommended!",
          },
          {
            id: 7,
            name: "Louis V.",
            desc:
              "Love this doctor and her co-doctors and her staff. Love this location and brand new office. So great! And wonderful, clear and expressive bedside manner.",
          },
      ],
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 1,
        },
        650: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    };
  }

  componentDidMount() {
    var sectiontitles = document.getElementsByName("maintitle");
    sectiontitles[1].classList.remove("mb-4");
    sectiontitles[1].classList.remove("pb-2");
    sectiontitles[1].classList.add("mb-60");
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* render Section title */}
            <SectionTitle title="Testimonials" />

            <Row>
              <Col xs="12">
                <OwlCarousel
                  className="owl-theme"
                  items={3}
                  loop
                  margin={1}
                  responsive={this.state.responsive}
                  autoplay={true}
                >
                  {this.state.clients.map((client, key) => (
                    <div
                      key={key}
                      className="customer-testi mr-2 ml-2 text-center p-4 rounded border"
                    >
                      <img
                        src={client.image}
                        className="img-fluid avatar avatar-ex-sm mx-auto"
                        alt=""
                      />
                      <p className="text-muted mt-4">"{client.desc}"</p>
                      <h6 className="text-primary">- {client.name}</h6>
                    </div>
                  ))}
                </OwlCarousel>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testi;
