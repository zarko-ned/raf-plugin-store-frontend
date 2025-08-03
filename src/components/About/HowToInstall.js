import React, {useEffect, useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Particle from "../Particle";
import logo from "../../Assets/logo.png";

function HowToInstall() {
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <h1 style={{fontSize: "2.1em", paddingBottom: "20px", paddingTop: "20px"}}>
                        Uputstva za instalaciju plugina
                    </h1>
                    <Col
                        md={6}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 className="project-heading">
                            <strong className="purple">Instalacija preko online prodavnice</strong>
                        </h1>

                        <div className="installation-steps">
                            <ol style={{fontSize: "1.1rem", lineHeight: "1.6"}}>
                                <li style={{marginBottom: "10px"}}>
                                    Kopirajte Plugon store link
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Otvorite IntelliJ IDEA
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Idite na <strong>Settings/Preferences</strong> (<code>Ctrl+Alt+S</code> na
                                    Windows/Linux ili <code>Cmd+,</code> na Mac)
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Kliknite na <strong>ikonicu zupčanika (⚙️) pored "Installed" i
                                    "Marketplace"</strong> tabova
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Izaberite na <strong>Manage Plugin Repositories....</strong> tab
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    U search polju ukucajte <strong>"RAF Teacher Plugin"</strong>
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Kliknite na <strong>Install</strong> dugme pored plugina
                                </li>
                                <li>
                                    Restartujte IntelliJ IDEA nakon instalacije
                                </li>
                            </ol>

                        </div>
                    </Col>

                    <Col md={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            src="https://i.postimg.cc/9MmF9WSv/install1.gif"

                            alt="Instalacija plugina"
                            style={{maxWidth: "100%", height: "auto", borderRadius: "10px"}}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
);
}

export default HowToInstall;
