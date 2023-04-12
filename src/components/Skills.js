import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/mission1.png";
import meter2 from "../assets/img/mission2.png";
import meter3 from "../assets/img/mission3.png";
import meter4 from "../assets/img/mission4.png";
import meter5 from "../assets/img/mission5.png";
import meter6 from "../assets/img/mission6.png";
import Accordion from 'react-bootstrap/Accordion';
import "animate.css";
import TrackVisibility from "react-on-screen";


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
            <TrackVisibility>
                {({ isVisible }) =>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        Our Mission
                                    </h2>
                                    <p className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        People with water-borne diseases occupy more than 50% of hospital beds across the world. does the answer lie in building more hospitals? Really, what is needed is to give them clean water. - Manoj Bhargava</p>
                                    {/* replace carousel images with relavent stuff */}
                                    <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
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
                                    </div>
                                    <h3 className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        Why It Matters
                                    </h3>
                                    <Accordion className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>The People</Accordion.Header>
                                            <Accordion.Body style={{ backgroundColor: '#151515' }}>
                                                <p style={{ fontSize: "25px" }}>One water bottle can have profound impacts.</p>
                                                <p>The cdc estimates that roughly 790 million people lack access to water. even worse, an estimated 1.8 billion lack access to proper sanitation. Dirty water is responsible for killing 3.4 million people (mostly children) every year through illnesses that could be prevented with a source of clean water. Most of the people who live in areas that do not have access to water lack the economic capability to solve these problems on their own.</p>
                                                <p>As populations grow, the water crisis will also continue to grow. the communities we assist are oftentimes found on top of fresh water sources, but the issue resides in accessing it. Many communities do not have the capital or equipment to reach water that would help improve the health, sanitation and livelihoods of hundreds.</p>
                                                <p>With the money that we earn from our water bottle sales, we establish wells that will provide communities with clean water for years to come.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>The Environment</Accordion.Header>
                                            <Accordion.Body style={{ backgroundColor: '#151515' }}>
                                                <p style={{ fontSize: "25px" }}>Ripple is committed to reducing plastic waste.</p>
                                                <p>In the United States, 90 percent of our citizens have access to water through public infrastructure, yet we are being plagued by plastic water bottles. what most people do not know is that bottled and tap water are virtually identical in taste and purity.</p>
                                                <p>This means that expensive and resource-heavy processes that require crude oil and extra water are being wasted to sell bottles that will only hurt our environment. The production of plastic water bottles requires up to 17 million barrels of oil each year. The manufacturing of a water bottle requires three times the amount of water needed to fill it. </p>
                                                <p>60 million plastic bottles are disposed of in one day in the united states alone, and 80% of those bottles end up overflowing landfills. Each bottle can take up to 1,000 years to decompose, leaking dangerous and harmful chemicals during the process. some toxins leaked could cause cancer and reproductive disabilities. This is why it is imperative to solve the plastic waste crisis.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                }
            </TrackVisibility>
        </section>
    )
}