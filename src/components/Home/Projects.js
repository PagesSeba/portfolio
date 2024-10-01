import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} className="">
              MY <span className="green"> PROJECTS </span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="green">E-Commerce</h1>
            <video></video>
            <h6 className="white">Made using <strong className="green">React.js, Node.js </strong> and <strong className="green">Firebase</strong>.</h6>
            <a src="#"><p className="white">Live Demo</p></a>
          </Col>
          <Col>
            <h1 className="green">College Managment</h1>
            <video></video>
            <h6 className="white">Made using <strong className="green">PHP, SQL, HTML </strong> and <strong className="green">CSS</strong>.</h6>
            <a src="#"><p className="white">Live Demo</p></a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;