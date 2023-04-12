import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mission1.png";
import projImg2 from "../assets/img/mission2.png";
import projImg3 from "../assets/img/mission3.png";
import projImg4 from "../assets/img/mission4.png";
import projImg5 from "../assets/img/mission5.png";
import projImg6 from "../assets/img/mission6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects1 = [
        {
            title: "Well 1",
            description: "Some Place, Uganda",
            imgUrl: projImg1,
        },
        {
            title: "Well 2",
            description: "Some Place, Uganda",
            imgUrl: projImg2,
        },
        {
            title: "Well 3",
            description: "Some Place, Uganda",
            imgUrl: projImg3,
        },

    ];

    const projects2 = [
        {
            title: "Well 4",
            description: "Some Place, Ethiopia",
            imgUrl: projImg4,
        },
        {
            title: "Well 5",
            description: "Some Place, Ethiopia",
            imgUrl: projImg5,
        },
        {
            title: "Well 6",
            description: "Some Place, Ethiopia",
            imgUrl: projImg6,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div>
                                    <h2 className={isVisible ? "animate__animated animate__zoomIn" : ""}>Projects</h2>
                                    <p className={isVisible ? "animate__animated animate__fadeInUp" : ""}>For every 2,000 ripple water bottles sold, a community in need receives a well that provides clean water - give the gift of life.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                                        <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Uganda</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Ethiopia</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">
                                                        Ghana
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                        <Tab.Content className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#5CB0F0", borderRadius: "40px" }}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <Col>
                                <h2 style={{ fontSize: "100px", paddingTop: "20px" }} className={isVisible ? "animate__animated animate__bounceInUp" : ""}>X,XXX</h2>
                                <p style={{ color: "white" }} className={isVisible ? "animate__animated animate__fadeInUp" : ""}>bottles till our next well</p>
                            </Col>
                        }
                    </TrackVisibility>
                </Row>
                <Row>

                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div >
                                    <h3 className={isVisible ? "animate__animated animate__fadeInUp" : ""}>The Ripple Effect</h3>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        className={isVisible ? "animate__animated animate__fadeInUp" : ""}
                                    >
                                        <iframe width="960" height="540" src="https://www.youtube.com/embed/ZwbMQuZQ4zU" title="We Are The Ripple: Digging Deeper To Solve The Water Crisis in Uganda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <p style={{ color: 'white', fontSize: "25px" }} className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        We built the first modern solar well in Uganda in under six months, thanks to you!
                                    </p>
                                    <p className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
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