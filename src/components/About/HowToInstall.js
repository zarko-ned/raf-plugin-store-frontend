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
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Centrira naslov horizontalno
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 className="project-heading" style={{textAlign: "center"}}> {/* Dodajemo textAlign za dodatnu sigurnost */}
                            <strong className="purple">Instalacija preko online prodavnice</strong>
                        </h1>

                        <div className="installation-steps" style={{width: "100%", maxWidth: "600px"}}> {/* Ograničavamo širinu i koristimo 100% dostupnog prostora */}
                            <ol style={{
                                fontSize: "1.1rem",
                                lineHeight: "1.6",
                                textAlign: "left", // Eksplicitno postavljamo poravnanje teksta na levo
                                paddingLeft: "20px", // Dodajemo malo prostora sa leve strane
                                marginLeft: "0", // Osiguravamo da nema dodatnih margina
                                width: "100%" // Koristimo punu dostupnu širinu
                            }}>
                                <li style={{marginBottom: "10px"}}>
                                    Kopirajte Plugin store{" "}
                                    <a
                                        href="https://rafplugins.store/teacherplugin/update"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "#1976d2",
                                            textDecoration: "none",
                                            fontWeight: "500",
                                            borderBottom: "1px dashed #1976d2",
                                            paddingBottom: "1px"
                                        }}
                                    >
                                        link
                                    </a>
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Otvorite IntelliJ IDEA
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Idite na <strong>Settings/Preferences</strong> (<code>Ctrl+Alt+S</code> na
                                    Windows/Linux ili <code>Cmd+,</code> na Mac)
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    U levom meniju, idite na Plugins
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Kliknite na <strong>ikonicu zupčanika (⚙️) pored "Installed" i
                                    "Marketplace"</strong> tabova
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Izaberite <strong>Manage Plugin Repositories...</strong> tab
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Kliknite na dugme<strong>➕</strong> i nalepite prethodno kopiran link
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Kliknite <strong>OK</strong> da sačuvate promene
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Nakon toga plugin je dostupan u "Marketplace-u" i možete ga instalirati i ažurirati
                                    tako što kliknete na <strong>Marketplace</strong>
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

                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={6}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Centrira naslov horizontalno
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 className="project-heading" style={{textAlign: "center"}}> {/* Dodajemo textAlign za dodatnu sigurnost */}
                            <strong className="purple">Instalacija pojedinačne verzije preko arhiviranog fajla</strong>
                        </h1>

                        <div className="installation-steps" style={{width: "100%", maxWidth: "600px"}}> {/* Ograničavamo širinu i koristimo 100% dostupnog prostora */}
                            <ol style={{
                                fontSize: "1.1rem",
                                lineHeight: "1.6",
                                textAlign: "left", // Eksplicitno postavljamo poravnanje teksta na levo
                                paddingLeft: "20px", // Dodajemo malo prostora sa leve strane
                                marginLeft: "0", // Osiguravamo da nema dodatnih margina
                                width: "100%" // Koristimo punu dostupnu širinu
                            }}>
                                <li style={{marginBottom: "10px"}}>
                                    Otvorite IntelliJ IDEA
                                </li>

                                <li style={{marginBottom: "10px"}}>
                                    Idite na <strong>Settings/Preferences</strong> (<code>Ctrl+Alt+S</code> na
                                    Windows/Linux ili <code>Cmd+,</code> na Mac)
                                </li>

                                <li style={{marginBottom: "10px"}}>
                                    U levom meniju, idite na Plugins
                                </li>

                                <li style={{marginBottom: "10px"}}>
                                    Kliknite na <strong>ikonicu zupčanika (⚙️) pored "Installed" i
                                    "Marketplace"</strong> tabova
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Izaberite <strong>🔌 Install Plugin from Disk...</strong> tab
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Nađite željenu verziju na vašem disku
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Kliknite <strong>OK</strong> da sačuvate promene
                                </li>
                                <li style={{marginBottom: "10px"}}>
                                    Ovo će instalirati samo <strong>pojedinačnu verziju </strong>i dodavanje svake nove verzije zahteva ponavljanje procesa
                                </li>
                            </ol>
                        </div>
                    </Col>
                    <Col md={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img
                            src="https://i.postimg.cc/gkhHTG9T/install2.gif"

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
