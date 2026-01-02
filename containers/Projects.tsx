import React, { useState, useMemo } from "react";
import { projects } from "../portfolio";
import { Container, Row, Col, Input, Button, InputGroup, InputGroupText } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Tüm kategorileri ve teknolojileri topla
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    projects.forEach((project) => {
      if (project.category) categories.add(project.category);
    });
    return Array.from(categories).sort();
  }, []);

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project) => {
      if (project.technologies) {
        project.technologies.forEach((tech) => techs.add(tech));
      }
    });
    return Array.from(techs).sort();
  }, []);

  // Filtreleme ve arama
  const filteredProjects = useMemo(() => {
    return projects.filter((project: ProjectType) => {
      // Kategori filtresi
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false;
      }

      // Teknoloji filtresi
      if (selectedTechnology !== "all") {
        if (!project.technologies || !project.technologies.includes(selectedTechnology)) {
          return false;
        }
      }

      // Arama filtresi
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDesc = project.desc.toLowerCase().includes(query);
        const matchesTech = project.technologies?.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        const matchesCategory = project.category?.toLowerCase().includes(query);

        if (!matchesName && !matchesDesc && !matchesTech && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTechnology, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTechnology("all");
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedTechnology !== "all" || searchQuery.trim() !== "";

  return (
    projects && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4 mb-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">PROJECTS</h4>
              </div>
            </div>

            {/* Filtreleme ve Arama Bölümü */}
            <div className="mb-4">
              <Row>
                {/* Arama */}
                <Col md="12" className="mb-3">
                  <InputGroup style={{ borderRadius: "8px" }}>
                    <InputGroupText style={{ backgroundColor: "#ffffff", borderRight: "none" }}>
                      <i className="fa fa-search text-muted" />
                    </InputGroupText>
                    <Input
                      type="text"
                      placeholder="Proje adı, açıklama veya teknoloji ile ara..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        borderLeft: "none",
                        borderRight: searchQuery ? "none" : "1px solid #ced4da",
                        borderRadius: "0 8px 8px 0",
                        padding: "0.75rem 1rem",
                        fontSize: "0.95rem",
                        backgroundColor: "#ffffff",
                      }}
                    />
                    {searchQuery && (
                      <InputGroupText style={{ backgroundColor: "#ffffff", borderLeft: "none" }}>
                        <Button
                          color="link"
                          onClick={() => setSearchQuery("")}
                          style={{ 
                            padding: 0, 
                            border: "none",
                            color: "#6c757d"
                          }}
                        >
                          <i className="fa fa-times" />
                        </Button>
                      </InputGroupText>
                    )}
                  </InputGroup>
                </Col>

                {/* Kategori Filtresi */}
                <Col md="6" className="mb-3">
                  <label className="mb-2 filter-label" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    Kategori:
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      color={selectedCategory === "all" ? "info" : "secondary"}
                      onClick={() => setSelectedCategory("all")}
                      style={{ borderRadius: "20px" }}
                    >
                      Tümü
                    </Button>
                    {allCategories.map((category) => (
                      <Button
                        key={category}
                        size="sm"
                        color={selectedCategory === category ? "info" : "outline-secondary"}
                        onClick={() => setSelectedCategory(category)}
                        style={{ borderRadius: "20px" }}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </Col>

                {/* Teknoloji Filtresi */}
                <Col md="6" className="mb-3">
                  <label className="mb-2 filter-label" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    Teknoloji:
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      color={selectedTechnology === "all" ? "info" : "secondary"}
                      onClick={() => setSelectedTechnology("all")}
                      style={{ borderRadius: "20px" }}
                    >
                      Tümü
                    </Button>
                    {allTechnologies.slice(0, 8).map((tech) => (
                      <Button
                        key={tech}
                        size="sm"
                        color={selectedTechnology === tech ? "info" : "outline-secondary"}
                        onClick={() => setSelectedTechnology(tech)}
                        style={{ borderRadius: "20px" }}
                      >
                        {tech}
                      </Button>
                    ))}
                    {allTechnologies.length > 8 && (
                      <Button size="sm" color="outline-secondary" style={{ borderRadius: "20px" }}>
                        +{allTechnologies.length - 8}
                      </Button>
                    )}
                  </div>
                </Col>

                {/* Filtreleri Temizle */}
                {hasActiveFilters && (
                  <Col md="12" className="mb-3">
                    <Button
                      size="sm"
                      color="link"
                      onClick={clearFilters}
                      style={{ padding: 0, textDecoration: "none" }}
                    >
                      <i className="fa fa-times-circle mr-1" />
                      Filtreleri Temizle
                    </Button>
                  </Col>
                )}

                {/* Sonuç Sayısı */}
                <Col md="12" className="mb-3">
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    {filteredProjects.length} proje bulundu
                    {hasActiveFilters && ` (${projects.length} toplam)`}
                  </p>
                </Col>
              </Row>
            </div>

            {/* Projeler */}
            {filteredProjects.length > 0 ? (
              <Row className="row-grid align-items-center">
                {filteredProjects.map((data, i) => {
                  return (
                    <ProjectsCard 
                      key={data.id || i} 
                      {...data} 
                    />
                  );
                })}
              </Row>
            ) : (
              <div className="text-center py-5">
                <i className="ni ni-archive-2 text-muted" style={{ fontSize: "4rem" }} />
                <h5 className="text-muted mt-3">Proje bulunamadı</h5>
                <p className="text-muted">Filtreleri değiştirerek tekrar deneyin.</p>
                {hasActiveFilters && (
                  <Button color="info" size="sm" onClick={clearFilters} className="mt-2">
                    Filtreleri Temizle
                  </Button>
                )}
              </div>
            )}
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;
