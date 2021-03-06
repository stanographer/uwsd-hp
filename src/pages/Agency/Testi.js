// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import ReviewsSlider from "../../components/Shared/reviews-slider";
import BlogBox from "../../components/Shared/blog-box";

//Import Images
import img1 from "../../images/client/01.jpg";
import img2 from "../../images/client/02.jpg";
import img3 from "../../images/client/03.jpg";
import img4 from "../../images/client/04.jpg";
import img5 from "../../images/client/05.jpg";
import img6 from "../../images/client/06.jpg";

// Blog Images
import blog1 from '../../images/blog/01.jpg';
import blog2 from '../../images/blog/02.jpg';
import blog3 from '../../images/blog/03.jpg';

class Testi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews : [
                { id : 1, img : img1, name : "Thomas Israel", post : "C.E.O", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating : 5 },
                { id : 2, img : img2, name : "Barbara McIntosh", post : "M.D", desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating : 4 },
                { id : 3, img : img3, name : "Carl Oliver", post : "P.A", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating : 3 },
                { id : 4, img : img4, name : "Christa Smith", post : "Manager", desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating : 5 },
                { id : 5, img : img5, name : "Dean Tolle", post : "Developer", desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating : 5 },
                { id : 6, img : img6, name : "ill Webb", post : "Designer", desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating : 4 },
            ],
            blogs : [
                { id : 1, image : blog1, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 2, image : blog3, title : "How apps is changing the IT world", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 3, image : blog2, title : "Smartest Applications for Business", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
            ]
        }
    }
    
    componentDidMount(){
        var sectionTitles=document.getElementsByName("maintitle");
        sectionTitles[1].classList.remove("mb-4");
        sectionTitles[1].classList.remove("pb-2");
        sectionTitles[1].classList.add("mb-60");
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Client Reviews" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        {/* clients slider */}
                        <ReviewsSlider reviews={this.state.reviews}/>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Latest News" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* blog box */}
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Testi;