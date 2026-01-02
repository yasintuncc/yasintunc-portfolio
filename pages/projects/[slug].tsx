import { useRouter } from "next/router";
import { projects } from "../../portfolio";
import { Container, Row, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import SEO from "../../components/SEO";
import Navigation from "../../components/Navigation";
import { ProjectType } from "../../types/sections";

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Projeyi slug'a göre bul
  const project: ProjectType | undefined = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div>
        <Navigation />
        <Container className="mt-5">
          <h2>Proje bulunamadı</h2>
          <Button onClick={() => router.push("/")} color="info">
            Ana Sayfaya Dön
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <SEO />
      <Navigation />
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <Row>
              <Col lg="12">
                <div className="mb-3">
                  <Button
                    color="info"
                    onClick={() => router.back()}
                    size="sm"
                    className="mb-2 animated-button"
                  >
                    <i className="fa fa-arrow-left mr-2" />
                    Geri Dön
                  </Button>
                </div>
                
                <Fade bottom duration={2000}>
                  <div className="mb-3">
                    <h1 className="display-4 text-info mb-2">{project.name}</h1>
                    
                    <div className="d-flex align-items-center flex-wrap mb-2">
                      {project.category && (
                        <span className="badge badge-info badge-lg mr-2 mb-1">
                          {project.category}
                        </span>
                      )}
                      
                      {project.date && (
                        <span className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                          <i className="ni ni-calendar-grid-58 mr-1" />
                          {project.date}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2" style={{ fontWeight: 600 }}>Proje Açıklaması</h4>
                    <p className="lead mb-0" style={{ lineHeight: "1.8" }}>{project.desc}</p>
                  </div>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2" style={{ fontWeight: 600 }}>Kullanılan Teknolojiler</h4>
                      <div className="d-flex flex-wrap">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="badge badge-primary mr-2 mb-2"
                            style={{ fontSize: "0.85rem", padding: "0.5rem 0.75rem" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.github && (
                      <Button
                        color="github"
                        href={project.github}
                        target="_blank"
                        rel="noopener"
                        className="btn-icon animated-button"
                        style={{ marginRight: "0.5rem" }}
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text ml-2">GitHub</span>
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        color="success"
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                        className="btn-icon animated-button"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-external-link" />
                        </span>
                        <span className="btn-inner--text ml-2">Live Demo</span>
                      </Button>
                    )}
                  </div>

                  {/* İlgili Projeler */}
                  <div className="mt-4 pt-4" style={{ borderTop: "1px solid #e9ecef" }}>
                    <h4 className="mb-3" style={{ fontWeight: 600 }}>Diğer Projeler</h4>
                    <Row>
                      {projects
                        .filter((p) => p.id !== project.id)
                        .slice(0, 3)
                        .map((relatedProject, index) => (
                          <Col key={index} md="4" className="mb-3">
                            <Fade bottom duration={1000} delay={index * 100}>
                              <div
                                className="card shadow-lg--hover shadow h-100 project-card-animated"
                                style={{ 
                                  cursor: "pointer",
                                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                  border: "none"
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                                  e.currentTarget.style.boxShadow = "";
                                }}
                                onClick={() =>
                                  router.push(`/projects/${relatedProject.slug}`)
                                }
                              >
                              <div className="card-body">
                                <h5 className="mb-2" style={{ fontWeight: 600 }}>
                                  {relatedProject.name}
                                </h5>
                                <p className="text-sm text-muted mb-3" style={{ 
                                  fontSize: "0.9rem",
                                  lineHeight: "1.6",
                                  minHeight: "3rem"
                                }}>
                                  {relatedProject.desc.substring(0, 100)}...
                                </p>
                                <Button
                                  size="sm"
                                  color="info"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(
                                      `/projects/${relatedProject.slug}`
                                    );
                                  }}
                                  className="w-100 animated-button"
                                >
                                  Detayları Gör
                                </Button>
                              </div>
                            </div>
                            </Fade>
                          </Col>
                        ))}
                    </Row>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>
    </div>
  );
};

export default ProjectDetail;

