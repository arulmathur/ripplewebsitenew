import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div>
                                    <h1 className={isVisible ? "animate__animated animate__zoomIn" : ""}>Projects</h1>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div >
                                    <h3>The Ripple Effect</h3>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <iframe width="960" height="540" src="https://www.youtube.com/embed/ZwbMQuZQ4zU" title="We Are The Ripple: Digging Deeper To Solve The Water Crisis in Uganda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <p style={{ fontSize: "25px" }}>
                                        We built the first modern solar well in Uganda in under six months, thanks to you!
                                    </p>
                                    <p>
                                        Using more than 25% of the profit from every bottle you helped us sell, we built the first ever, solar powered well that uses natural limestone filtration to pump water to five different faucets
                                    </p>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}