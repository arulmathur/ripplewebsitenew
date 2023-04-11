import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mission1.png";
import projImg2 from "../assets/img/mission2.png";
import projImg3 from "../assets/img/mission3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

    const projects = [
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
        // {
        //     title: "Well 4",
        //     description: "Design & Development",
        //     imgUrl: projImg1,
        // },
        // {
        //     title: "Well 5",
        //     description: "Design & Development",
        //     imgUrl: projImg2,
        // },
        // {
        //     title: "Well 6",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>For every 2,000 ripple water bottles sold, a community in need receives a well that provides clean water - give the gift of life.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
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
                                            projects.map((project, index) => {
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
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>The Ripple Effect</h3>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <iframe width="960" height="540" src="https://www.youtube.com/embed/ZwbMQuZQ4zU" title="We Are The Ripple: Digging Deeper To Solve The Water Crisis in Uganda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <p style={{ color: 'white', fontSize: "25px" }}>
                            We built the first modern solar well in Uganda in under six months, thanks to you!
                        </p>
                        <p>
                            Using more than 25% of the profit from every bottle you helped us sell, we built the first ever, solar powered well that uses natural limestone filtration to pump water to five different faucets
                        </p>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}