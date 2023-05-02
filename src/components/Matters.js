import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import "animate.css";
import TrackVisibility from "react-on-screen";
import quoteImage from "../assets/img/mission1.png";
import reel1 from "../assets/img/mission2.png";
import reel2 from "../assets/img/mission3.png";
import reel3 from "../assets/img/mission4.png";
import reel4 from "../assets/img/mission5.png";
import reel5 from "../assets/img/mission6.png";


export const Matters = () => {
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
        <section className="matters" id="matters">
            <TrackVisibility>
                {({ isVisible }) =>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <TrackVisibility>
                                        {({ isVisible }) =>
                                            <h1 className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                                Why It Matters
                                            </h1>
                                        }
                                    </TrackVisibility>
                                    <div style={{ display: 'flex' }} className="quote">
                                        <div style={{ flex: 1 }}>
                                            <img src={quoteImage} style={{ width: '100%' }} />
                                        </div>
                                        <div style={{ flex: 2 }}>
                                            <p className="content">People with water-borne diseases occupy more than 50% of hospital beds across the world.
                                                Does the answer lie in building more hospitals? Really, what is needed is to give them clean water. </p>
                                            <p>-- Manoj Bhargava</p>
                                        </div>
                                    </div>
                                    <h3>How We Help</h3>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>The People</Accordion.Header>
                                            <Accordion.Body>
                                                <h2 style={{ textAlign: "center" }}>One water bottle can have profound impacts.</h2>
                                                <p>The CDC estimates that roughly 790 million people lack access to water. even worse, an estimated 1.8 billion lack access to proper sanitation. Dirty water is responsible for killing 3.4 million people (mostly children) every year through illnesses that could be prevented with a source of clean water. Most of the people who live in areas that do not have access to water lack the economic capability to solve these problems on their own.</p>
                                                <p>As populations grow, the water crisis will also continue to grow. the communities we assist are oftentimes found on top of fresh water sources, but the issue resides in accessing it. Many communities do not have the capital or equipment to reach water that would help improve the health, sanitation and livelihoods of hundreds.</p>
                                                <p>With the money that we earn from our water bottle sales, we establish wells that will provide communities with clean water for years to come.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>The Environment</Accordion.Header>
                                            <Accordion.Body>
                                                <h2 style={{ textAlign: "center" }}>Ripple is committed to reducing plastic waste.</h2>
                                                <p>In the United States, 90 percent of our citizens have access to water through public infrastructure, yet we are being plagued by plastic water bottles. what most people do not know is that bottled and tap water are virtually identical in taste and purity.</p>
                                                <p>This means that expensive and resource-heavy processes that require crude oil and extra water are being wasted to sell bottles that will only hurt our environment. The production of plastic water bottles requires up to 17 million barrels of oil each year. The manufacturing of a water bottle requires three times the amount of water needed to fill it. </p>
                                                <p>60 million plastic bottles are disposed of in one day in the united states alone, and 80% of those bottles end up overflowing landfills. Each bottle can take up to 1,000 years to decompose, leaking dangerous and harmful chemicals during the process. some toxins leaked could cause cancer and reproductive disabilities. This is why it is imperative to solve the plastic waste crisis.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div style={{ display: 'flex' }} className="imageReel">
                                    <div style={{ flex: 1, marginRight: "10px" }}>
                                        <img src={reel1} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ flex: 1, marginRight: "10px" }}>
                                        <img src={reel2} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ flex: 1, marginRight: "10px" }}>
                                        <img src={reel3} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ flex: 1, marginRight: "10px" }}>
                                        <img src={reel4} style={{ width: '100%' }} />
                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </Container>
                }
            </TrackVisibility>
        </section >
    )
}