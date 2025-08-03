import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


import StudentPluginCard from "./StudentPluginCard";
import laptopImg from "../../Assets/about.png";


function ReportBug() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
             Prijavite grešku
            </h1>
            <StudentPluginCard />
          </Col>

        </Row>


      </Container>
    </Container>
  );
}

export default ReportBug;
