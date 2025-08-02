import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function StudentPluginCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Plugin store za studentski plguin je trenutno u izradi!
                        <br/>
                        <br/>

                    </p>


                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default StudentPluginCard;
