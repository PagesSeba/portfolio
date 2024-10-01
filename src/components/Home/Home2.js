import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.png";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="green"> ME </span>
            </h1>
            <p className="home-about-body">
              I am fluent in
              <i>
                <b className="green"> React.js, Node.js and PHP. </b>
              </i>
              <br />
              <br />
              I have worked with Python.
              <br />
              <br />
              Native in Spanish, Fluent in English.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="home2img" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PagesSeba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sebastian-pages-63a56723b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
