import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./index.css";
import resume from "../../utils/images/DanielConlonResume.pdf";

function Resume () {
    return (
        <section>
            <Row>
                <Col>
                    <h3>Front-End Skills</h3>
                    <ul className="direction">
                        <Col>
                            <li>HTML</li>
                        </Col>
                        <Col>
                            <li>CSS</li>
                        </Col>
                        <Col>
                            <li>Bootstrap</li>
                        </Col>
                        <Col>
                            <li>JavaScript</li>
                        </Col>
                        <Col>
                            <li>jQuery</li>
                        </Col>
                        <Col>
                            <li>Ajax</li>
                        </Col>
                        <Col>
                            <li>Git</li>
                        </Col>
                    </ul>
                </Col>
                <Col >
                    <h3>Back-End Skills</h3>
                    <ul className="direction">
                        <Col>
                            <li>Node.js</li>
                        </Col>

                        <Col>
                            <li>Express.js</li>
                        </Col>

                        <Col>
                            <li>MySql</li>
                        </Col>

                        <Col>
                            <li>MongoDB</li>
                        </Col>

                        <Col>
                            <li>Snowflake</li>
                        </Col>

                        <Col>
                            <li>Sequelize</li>
                        </Col>

                        <Col>
                            <li>Inquirer</li>
                        </Col>
                    </ul>
                </Col>
            </Row>

            <Row>
                <h4>Want to work together? Send an email at danielcconlon@gmail.com</h4>
                <a download="Daniel_Conlon_Resume" href={resume}>
                    <Button style={{ width: '24rem', fontSize: '28px' }} variant="info">Resume</Button>
                </a>
            </Row>
        </section>
    )
}


export default Resume;