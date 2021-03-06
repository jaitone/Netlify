import { Row, Col } from "reactstrap"
import Picture from "../Assets/me.png"


const About = () => {

    return (
        <div id="aboutme">
            <div className="aboutme" style={{ width: '100%', margin: 'auto' }}>
                <h1 className="display-5">
                    <br />
                        About me
                    <br />
                </h1>
                <hr className="my-4"></hr>
                <div className="aboutme-container">
                    <Row className="aboutme-row">
                        <Col xl={6} className="aboutme-profilepic">
                            <img src={Picture} alt="profilepic"></img>
                        </Col>
                        <Col xl={6}>
                            <div className="aboutme-text">

                                <p>
                                    In early 2019, I made the decision to hang up my apron and change my life by learning how to code.
                            <br />
                                At the time, I did not even know about the existence of ‘GitHub’ or even names of the different programming languages, and now, here I am, a full-stack
                                developer showcasing my own website!
                            <br />
                                For years, I have had a strong interest in technology, its components and the way in which different parts work
                                together.
                            <br />
                                I have spent countless hours dissambling computers and building them back.
                            <br />
                                This has spurred an interest in coding, as I sought to understand the work behind the scenes, how to find the
                                source of a problem and fix it in a methodical way, and of course, with the help of Google.
                            <br />
                                I am seeking an opportunity to begin an exciting career while furthering my knowledge of
                                computer programming.
                            <br />
                                </p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    );
};

export default About;