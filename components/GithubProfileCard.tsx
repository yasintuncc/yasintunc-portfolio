import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { contactInfo } from "../portfolio";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={contactInfo.avatar_url}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                alt="avatar"
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white font-weight-bold mb-3" style={{ fontSize: "2.2rem", letterSpacing: "1px" }}>
                Contact Me!!
              </h2>
              <p className="lead text-white mb-3" style={{ fontSize: "1.15rem", fontWeight: 500 }}>
                You can always contact me to collaborate on your projects, work together, or just chat about technology.
                <br />
                <span style={{ fontWeight: 600, color: "#ffd700" }}>I am open to new opportunities!</span>
              </p>
              <hr style={{ background: "rgba(255,255,255,0.2)" }} />
              <div style={{ marginTop: "2.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#ffd700",
                    letterSpacing: "1px",
                    textShadow: "0 1px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  Frontend & Artificial Intelligence Engineer
                </span>
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  color: "#fff",
                }}
              >
                <span style={{ color: "#ffd700" }}></span> HTML, CSS, JAVASCRIPT, REACT JS, NODE JS{" "}
                <span style={{ color: "#ffd700" }}>
                  {" "}
                  <br /> In addition
                </span>{" "}
                C#, SQL SERVER, POSTGRE SQL, PYTHON
              </div>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {contactInfo.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
