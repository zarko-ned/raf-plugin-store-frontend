import React, {useEffect, useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Particle from "../Particle";

function ReportBug() {
    const [pluginType, setPluginType] = useState("");
    const [teacherPluginOptions, setTeacherPluginOptions] = useState([]);
    const [selectedPluginVersion, setSelectedPluginVersion] = useState("");

    useEffect(() => {
        if (pluginType === "nastavnicki") {
            fetch("https://rafplugins.store/api/v1/teacherplugin")
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setTeacherPluginOptions(data.data);
                    }
                });
        } else {
            setTeacherPluginOptions([]);
            setSelectedPluginVersion("");
        }
    }, [pluginType]);

    const handlePluginTypeChange = (e) => {
        const value = e.target.value;
        setPluginType(value);

        if (value === "studentski") {
            alert("Još uvek u izradi");
        }
    };

    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={12}
                        style={{
                            justifyContent: "center",
                            paddingTop: "20px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            Prijavite grešku
                        </h1>
                        <Form
                            action="https://formsubmit.co/b1c5a71539989c8ff5b2abe17026f019"
                            method="POST"
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Izaberite plugin</Form.Label>
                                <Form.Select
                                    name="plugin_type"
                                    value={pluginType}
                                    onChange={handlePluginTypeChange}
                                    required
                                >
                                    <option value="">Izaberite plugin</option>
                                    <option value="nastavnicki">Nastavnički</option>
                                    <option value="studentski">Studentski</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Izaberite verziju</Form.Label>
                                <Form.Select
                                    name="plugin_version"
                                    value={selectedPluginVersion}
                                    onChange={(e) => setSelectedPluginVersion(e.target.value)}
                                    disabled={pluginType !== "nastavnicki"}
                                    required={pluginType === "nastavnicki"}
                                >
                                    <option value="">Izaberite opciju</option>
                                    {teacherPluginOptions.map((item) => (
                                        <option
                                            key={item.plugin_release_id}
                                            value={item.name}
                                        >
                                            {item.name}, verzija {item.version}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Unesite email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Opis greška</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="bug_description"
                                    placeholder="Precizan scenario greške"
                                    required
                                />

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Pošalji
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ReportBug;
