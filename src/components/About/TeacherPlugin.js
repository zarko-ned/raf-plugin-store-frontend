import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";


import TeacherPluginCard from "./TeacherPluginCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function StudentPlugin() {
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",

                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            Nastavnički plugin
                        </h1>
                        <TeacherPluginCard/>
                    </Col>
                    <Col
                        md={5}
                        style={{paddingTop: "120px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid"/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                  <strong className="purple">Okruženja za koja je plugin podržan </strong>
                </h1>



                <Toolstack/>


            </Container>
        </Container>
    );
}

export default StudentPlugin;
