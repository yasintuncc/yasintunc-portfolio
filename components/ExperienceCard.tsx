import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets, location, workType, skills }: ExperienceType) => {
  return (
    <Col lg="6">
      <Fade bottom duration={1000}>
        <Card style={{ flex: 1, borderRadius: "12px" }} className="shadow-lg--hover my-4 shadow border-0 h-100">
          <CardBody className="p-4">
            <div className="d-flex align-items-start mb-3">
              <img
                src={companyLogo}
                style={{
                  objectFit: "cover",
                  width: "64px",
                  height: "64px",
                  borderRadius: "8px",
                  marginRight: "16px",
                  flexShrink: 0,
                }}
                className="shadow-sm"
                alt={company}
              />
              <div style={{ flex: 1 }}>
                <CardTitle tag="h5" className="mb-1" style={{ fontWeight: 600, fontSize: "1rem" }}>
                  {role}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2" style={{ fontSize: "0.9rem", color: "#6c757d" }}>
                  {company} · Intern
                </CardSubtitle>
                <CardSubtitle tag="p" className="mb-2" style={{ fontSize: "0.85rem", color: "#495057", marginBottom: "0.5rem" }}>
                  {date}
                </CardSubtitle>
                {(location || workType) && (
                  <CardSubtitle tag="p" className="mb-2" style={{ fontSize: "0.85rem", color: "#6c757d" }}>
                    {location} {workType && `· ${workType}`}
                  </CardSubtitle>
                )}
              </div>
            </div>
            
            {desc && (
              <CardText tag="div" className="description my-3" style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#495057" }}>
                {desc}
                {descBullets && (
                  <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
                    {descBullets.map((desc, index) => {
                      return <li key={index} style={{ marginBottom: "0.25rem" }}>{desc}</li>;
                    })}
                  </ul>
                )}
              </CardText>
            )}
            
            {skills && skills.length > 0 && (
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid #e9ecef" }}>
                <div className="d-flex align-items-center flex-wrap">
                  <i className="fa fa-diamond mr-2" style={{ fontSize: "0.75rem", color: "#11CDEF" }} />
                  <span style={{ fontSize: "0.85rem", color: "#495057" }}>
                    {skills.slice(0, 2).join(", ")}
                    {skills.length > 2 && ` and +${skills.length - 2} skills`}
                  </span>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
