import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Accordion from 'react-bootstrap/Accordion';
import joe from "../assets/img/joeimage.png";
import chip from "../assets/img/chipimage.png";
import arul from "../assets/img/arulimage.png";

export const Team = () => {
    return (
        <section className="team" id="team">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div>
                                    <h1 className={isVisible ? "animate__animated animate__zoomIn" : ""}>Behind the Scenes</h1>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
                <div style={{ display: 'flex' }} className="people">
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <img src={joe} style={{ width: '100%' }} />
                    </div>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <img src={chip} style={{ width: '100%' }} />
                    </div>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <img src={arul} style={{ width: '100%', height: "88.7%" }} />
                    </div>
                </div>
                <div style={{ display: 'flex' }} className="people">
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h2>Joe Knopp</h2></Accordion.Header>
                                <Accordion.Body>
                                    <h3 style={{ textAlign: "center" }}>Chief Water Giver & Founder</h3>
                                    <p>Joe is a start up junky who exudes creativity and curiosity. He’s started multiple businesses before the age of 20 but none seemed to have an impact in the way that he wanted them to — until ripple.
                                        ripple has turned into his baby, and Joe lies awake most nights thinking of new ways to share our story and help those communities in need faster.
                                        He’s risked it all and put all of his money on the line that he saved up from an internship into this business because he truly believes it will all work out with hard work and innovativeness that will ultimately lead to something that is indescribably amazing and beneficial to others.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h2>Chip Gottschalk</h2></Accordion.Header>
                                <Accordion.Body>
                                    <h3 style={{ textAlign: "center" }}>The Glue</h3>
                                    <p>Chip attends Walsh University and is pursuing a degree in biology and chemistry.
                                        After Walsh, he plans to attend dental school in pursuit of his dream of becoming a dentist.
                                        Joe and Chip became roommates sophomore year and Joe introduced Chip to the idea of bringing clean water to the disadvantaged through sustainable wells.
                                        Chip found this idea to be extremely exciting, as he has always had a passion to help others.
                                        Chip has spent many days and nights discussing the logistics with Joe and the processes to turn this vision into reality, and the duo will spend many more to ensure they bring clean water to those in need!</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h2>Arul Mathur</h2></Accordion.Header>
                                <Accordion.Body>
                                    <h3 style={{ textAlign: "center" }}>The Tech Guy</h3>
                                    <p>Arul is a student at UCLA pursuing a degree in Computer Science and Engineering.
                                        After founding and succesfully crowdfunding a wildfire technology startup in high-school, Arul stumbled across Joe and his incredible vision of bringing clean water to the world while looking for sustainable projects to contribute to.
                                        Arul joined the team 3 years after ripple's formation to serve as the technical backbone as ripple scales exponentially. In fact, he coded this very website from scratch!
                                        After school, Arul aims to continue using his technical skills to grow and support early-stage ventures that make a positive impact in the world, just like ripple.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </Container>
        </section >
    )
}