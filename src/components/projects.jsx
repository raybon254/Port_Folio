import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projects = [
    { title: "shopping store", desc: "A sleek and user-friendly online store showcasing a variety of phone products.", link: "#" },
    { title: "fleet fusion", desc: "A comprehensive fleet and passenger management system for bus companies.", link: "#" },
    { title: "Project 3", desc: "Mobile-first UI design", link: "#" },
  ];

  return (
    <section className="bg-light py-5" id="projects">
      <Container>
        <h2 className="text-center mb-4 text-uppercase fw-bold">Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} key={idx}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-uppercase fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button variant="primary" href="https://shopping-store-szp7.onrender.com/" className="m-2">View</Button>
                  <Button variant="primary" href="https://shopping-store-szp7.onrender.com/" className="m-2">Git</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
