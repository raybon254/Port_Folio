import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projects = [
    { title: "shopping store", desc: "A sleek and user-friendly online store showcasing a variety of phone products.", link: "https://shopping-store-szp7.onrender.com/", demo:"https://shopping-store-szp7.onrender.com/" },
    { title: "fleet fusion", desc: "A comprehensive fleet and passenger management system for bus companies.", link: "https://github.com/raybon254/FLEET_FUSION.git", demo:"https://github.com/raybon254/FLEET_FUSION.git" },
    { title: "marks calculator", desc: "A web-based application that allows teachers, students, or parents to easily record and manage student marks across different subjects.", link: "https://github.com/raybon254/Marks_calculator.git", demo:"https://marks-calculator-yyz5-asd1wpueh-rays-projects-be2f0007.vercel.app/" },
    { title: "expense tracker", desc: "A simple and intuitive web application to track your daily expenses. Easily add, view, and manage your transactions to stay on top of your finances.", link: "https://github.com/raybon254/expense-tracker.git", demo:"https://expense-tracker-2-ms4m.onrender.com/" },
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
                  <Button variant="primary" href={project.link} className="m-2">View</Button>
                  <Button variant="primary" href={project.demo} className="m-2">Demo</Button>
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
