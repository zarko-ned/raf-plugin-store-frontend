import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import PluginButton from "./PluginButton";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15, fontSize: "3.5rem" }} className="heading">
                                Dobrodošli!{" "}
                                <span className="wave" role="img" aria-labelledby="wave" style={{ fontSize: "3.5rem" }}>
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name" style={{ fontSize: "4rem" }}>
                                RAF
                                <strong className="main-name" style={{ fontSize: "4rem" }}> Plugin Store</strong>
                            </h1>

                            <div style={{ padding: 60, textAlign: "left" }}>
                                <Type style={{ fontSize: "2rem" }} />
                            </div>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <PluginButton
                                    name={"Nastavnički plugin"}
                                    to="teacherplugin"
                                    style={{ fontSize: "1.5rem", padding: "15px 30px" }}
                                />
                                <PluginButton
                                    name={"Studentski plugin"}
                                    to="/studentplugin"
                                    style={{ fontSize: "1.5rem", padding: "15px 30px" }}
                                />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 0 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "550px", marginTop: "30px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;