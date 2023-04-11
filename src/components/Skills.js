import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/mission1.png";
import meter2 from "../assets/img/mission2.png";
import meter3 from "../assets/img/mission3.png";
import meter4 from "../assets/img/mission4.png";
import meter5 from "../assets/img/mission5.png";
import meter6 from "../assets/img/mission6.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Our Mission
                            </h2>
                            <p>
                                People with water-borne diseases occupy more than 50% of hospital beds across the world. does the answer lie in building more hospitals? Really, what is needed is to give them clean water. - Manoj Bhargava</p>
                            {/* replace carousel images with relavent stuff */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"></img>
                                    {/* <h5>Web Development</h5> */}
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"></img>
                                    {/* <h5>Brand Identity</h5> */}
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"></img>
                                    {/* <h5>Logo Design</h5> */}
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image"></img>
                                    {/* <h5>Web Development</h5> */}
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image"></img>
                                    {/* <h5>Web Development</h5> */}
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image"></img>
                                    {/* <h5>Web Development</h5> */}
                                </div>
                            </Carousel>
                            <h3>
                                Why It Matters
                            </h3>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
}