import React, { useState } from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";
import { useRouter } from "next/router";

const ProjectsCard = ({ name, desc, github, link, slug, category, technologies }: ProjectType) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col lg="6">
      <Fade bottom duration={1000} delay={100}>
        <Card 
          className="shadow-lg--hover shadow mt-4 h-100 project-card-animated" 
          style={{ 
            border: "none",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardBody>
          <div className="px-3">
            <div>
              <h4 className="mb-2" style={{ fontWeight: 600 }}>{name}</h4>
              {category && (
                <span className="badge badge-info mb-2 mr-2" style={{ fontSize: "0.8rem" }}>
                  {category}
                </span>
              )}
              <p className="description mt-2 mb-2" style={{ 
                fontSize: "0.95rem",
                lineHeight: "1.6",
                minHeight: "3.5rem"
              }}>
                {desc}
              </p>
              
              {technologies && technologies.length > 0 && (
                <div className="mb-2">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge badge-primary mr-1 mb-1"
                      style={{ fontSize: "0.75rem", padding: "0.35rem 0.6rem" }}
                    >
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 3 && (
                    <span className="badge badge-secondary" style={{ fontSize: "0.75rem" }}>
                      +{technologies.length - 3}
                    </span>
                  )}
                </div>
              )}

              <div className="d-flex flex-wrap gap-2 mt-3">
                {slug && (
                  <Button
                    className="btn-icon animated-button"
                    color="info"
                    size="sm"
                    onClick={() => router.push(`/projects/${slug}`)}
                    style={{ 
                      marginRight: "0.5rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-info-circle" />
                    </span>
                    <span className="btn-inner--text ml-1">Detaylar</span>
                  </Button>
                )}
                {github ? (
                  <Button
                    className="btn-icon animated-button"
                    color="github"
                    size="sm"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {link ? (
                  <Button
                    className="btn-icon animated-button"
                    color="success"
                    size="sm"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Link"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-external-link" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
