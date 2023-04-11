import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/bottle.png";

// background with space stuff is in the CSS somewhere, look for classname of banner or something like that

export const Banner = () => {
    //change these words later
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Are the Ripple", "build wells", "save lives"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 50); //how fast a letter comes after the first one is typed
    const period = 2000; //length of time between letters being typed out

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={8} xl={9}>
                        <span className="tagline">Take a drink, give a drink</span>
                        <h1>{"We "}<span className="wrap">{text}</span>
                        </h1>
                        <p>By using your ripple bottle, you are reducing your own carbon footprint and the plastic burden placed on landfills, oceans, streams, and other places that impact the environment.</p>
                        <button onClick={() => window.location.href = "https://wearetheripple.com"}>Help make a difference <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}