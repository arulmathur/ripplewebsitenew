import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import springtitle from "../assets/img/springtext.png";
import meter1 from "../assets/img/spring1.jpg";
import meter3 from "../assets/img/spring2.jpg";
import meter2 from "../assets/img/spring3.jpg";
import Accordion from 'react-bootstrap/Accordion';
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Products = () => {
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
        <section className="products" id="products">
            <TrackVisibility>
                {({ isVisible }) =>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <img src={springtitle} className="springTitle"></img>
                                    {/* <p className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        People with water-borne diseases occupy more than 50% of hospital beds across the world. does the answer lie in building more hospitals? Really, what is needed is to give them clean water. - Manoj Bhargava</p>
                                    replace carousel images with relavent stuff */}
                                    <p></p>
                                    <div>
                                        <Carousel responsive={responsive} infinite={true} className="product-slider">
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
                                        </Carousel>
                                    </div>
                                    <div>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <Col>
                                                    <h1 className={isVisible ? "animate__animated animate__bounceInUp" : ""}>1,256</h1>
                                                    <p className={isVisible ? "animate__animated animate__fadeInUp" : ""}>bottles till our next well*</p>
                                                    <p style={{ fontSize: "30px" }}>For every 2,000 Ripple water bottles sold, a community in need recieves a well that provides clean water - give the gift of life.</p>
                                                </Col>
                                            }
                                        </TrackVisibility>
                                    </div>
                                    <button className="vvd" onClick={() => window.location.href = "https://wearetheripple.com"} style={{ margin: "-5px", marginTop: "-10px" }}>
                                        <span>Shop Now!</span>
                                    </button>
                                    <p className="info">*updated weekly</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                }
            </TrackVisibility>
        </section >
    )
}