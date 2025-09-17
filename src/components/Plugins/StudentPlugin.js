import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


import StudentPluginCard from "./StudentPluginCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import axios from "../../axiosInstance";
import TeacherPluginCard from "./TeacherPluginCard";

function StudentPlugin() {const [fullDescription, setFullDescription] = useState("Učitavanje opisa...");
    const [author, setAuthor] = useState("Ucitavanje autora...");
    const [isExpandedDesc, setIsExpandedDesc] = useState(false);
    const maxLength = 35;

    const toggleExpand = () => {
        setIsExpandedDesc(prev => !prev);
    };

    const isLong = fullDescription.length > maxLength;

    const visibleText = !isExpandedDesc && isLong
        ? fullDescription.substring(0, maxLength) + "..."
        : fullDescription;

    const fetchDescription = async () => {
        try {
            const response = await axios.get('/');
            if (response.data.success) {

                setFullDescription(response.data.data[1].description); // Bez spread operatora

                setAuthor(response.data.data[1].author); // Bez spread operatora


            }
        } catch (error) {
            console.error("Greška prilikom preuzimanja opisa:", error);
        }
    };

    useEffect(() => {

        fetchDescription();
    }, []);

    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <h1 style={{fontSize: "2.1em", paddingBottom: "20px", paddingTop: "20px"}}>
                        Studentski plugin
                    </h1>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",

                        }}
                    >

                        <StudentPluginCard/>
                    </Col>
                    <Col
                        md={5}
                        style={{paddingTop: "50px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <h1 className="project-author">
                            Autor: <strong className="author-name">{author}</strong>
                        </h1>
                        <p className="plugin-description" style={{cursor: isLong ? 'pointer' : 'default'}}>
                            {visibleText}
                            {isLong && (
                                <span
                                    onClick={toggleExpand}
                                    style={{
                                        color: '#934cce',
                                        fontWeight: 'bold',
                                        marginLeft: '8px',
                                        textDecoration: 'underline'
                                    }}
                                >
            {isExpandedDesc ? "Prikaži manje" : "Učitaj više"}
        </span>
                            )}
                        </p>
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
