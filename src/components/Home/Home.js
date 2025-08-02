import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import axiosInstance from "../../axiosInstance.js";
import PluginButton from "./PluginButton";

function Home() {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/"); // Osnovni endpoint
                setApiData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{paddingBottom: 5}} className="heading">
                                Dobrodošli!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                            </h1>

                            <h1 className="heading-name">
                                RAF
                                <strong className="main-name"> Plugin Store</strong>
                            </h1>

                            <div style={{padding: 50, textAlign: "left"}}>
                                <Type/>
                            </div>


                            <div style={{display: "flex", flexWrap: "wrap"}}>

                                <PluginButton  name={"Nastavnički plugin"} to="#"/>
                                <PluginButton  name={"Studentski plugin"} to="/studentplugin"/>

                            </div>

                        </Col>

                        <Col md={5} style={{paddingBottom: 0}}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{maxHeight: "450px"}}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;