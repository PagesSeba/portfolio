import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Sebastián Pagés </span>
            from <span className="green"> Córdoba, Argentina</span>
            <br />  
            Currently Studying AI & Data Science in IES 21, Córdoba, Argentina
            <br />
            <br />
            Learned FullStack Development in CoderHouse, i have worked as both individually and with a team making websites
            <br />
            <br />
            I love traveling, meeting new places and their cultures amazes me, would love to work abroad
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
