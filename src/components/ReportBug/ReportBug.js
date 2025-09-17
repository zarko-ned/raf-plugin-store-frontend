import React, {useEffect, useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Particle from "../Particle";
import axios from "../../axiosInstance";

function ReportBug() {
    const [pluginType, setPluginType] = useState("");
    const [teacherPluginOptions, setTeacherPluginOptions] = useState([]);
    const [studentPluginOptions, setStudentPluginOptions] = useState([]);
    const [selectedPluginVersion, setSelectedPluginVersion] = useState("");

    useEffect(() => {
        fetchPluginOptions();
    }, [pluginType]);

    const fetchPluginOptions = async () => {
        if (pluginType === "nastavnicki") {
            const response = await axios.get('/releases/teacher');
            if (response.data.success) {

                setTeacherPluginOptions(response.data.data);
                setStudentPluginOptions([]);
            }
        } else if (pluginType === "studentski") {
            const response = await axios.get('/releases/student');
            if (response.data.success) {
                setStudentPluginOptions(response.data.data);
                setTeacherPluginOptions([]);
            }
        } else {
            setTeacherPluginOptions([]);
            setStudentPluginOptions([]);
            setSelectedPluginVersion("");
        }
    };


    const handlePluginTypeChange = (e) => {
        const value = e.target.value;
        setPluginType(value);
        setSelectedPluginVersion("");
    };

    const getPluginOptions = () => {
        if (pluginType === "nastavnicki") {
            return teacherPluginOptions;
        } else if (pluginType === "studentski") {
            return studentPluginOptions;
        }
        return [];
    };

    const isPluginVersionRequired = pluginType === "nastavnicki" || pluginType === "studentski";

    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "20px"}}>
                    <Col
                        md={12}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "60px",
                        }}
                    >
                        <h1 style={{fontSize: "2.6em", paddingBottom: "30px"}}>
                            Prijavite grešku
                        </h1>
                        <Form
                            action="https://formsubmit.co/b1c5a71539989c8ff5b2abe17026f019"
                            method="POST"
                            style={{fontSize: "1.2em"}}
                        >
                            <Form.Group className="mb-4">
                                <Form.Label style={{fontSize: "1.2em", marginBottom: "10px"}}>Izaberite plugin</Form.Label>
                                <Form.Select
                                    name="plugin_type"
                                    value={pluginType}
                                    onChange={handlePluginTypeChange}
                                    required
                                    style={{fontSize: "1.1em", padding: "12px"}}
                                >
                                    <option value="">Izaberite plugin</option>
                                    <option value="nastavnicki">Nastavnički</option>
                                    <option value="studentski">Studentski</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label style={{fontSize: "1.2em", marginBottom: "10px"}}>Izaberite verziju</Form.Label>
                                <Form.Select
                                    name="plugin_version"
                                    value={selectedPluginVersion}
                                    onChange={(e) => setSelectedPluginVersion(e.target.value)}
                                    disabled={!isPluginVersionRequired}
                                    required={isPluginVersionRequired}
                                    style={{fontSize: "1.1em", padding: "12px"}}
                                >
                                    <option value="">Izaberite opciju</option>
                                    {getPluginOptions().map((item) => (
                                        <option
                                            key={item.plugin_release_id}
                                            value={item.name}
                                        >
                                            {item.name}, verzija {item.version}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label style={{fontSize: "1.2em", marginBottom: "10px"}}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Unesite email"
                                    required
                                    style={{fontSize: "1.1em", padding: "12px"}}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label style={{fontSize: "1.2em", marginBottom: "10px"}}>Opis greške</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="bug_description"
                                    placeholder="Precizan scenario greške"
                                    required
                                    style={{fontSize: "1.1em", padding: "12px", minHeight: "150px"}}
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                style={{
                                    fontSize: "1.2em",
                                    padding: "12px 30px",
                                    marginTop: "20px"
                                }}
                            >
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