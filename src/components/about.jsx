import { Container, Row, Col, Image } from "react-bootstrap";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="py-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image roundedCircle width={250} height={250} style={{ objectFit: "cover" }} src={profile} alt={profile} />
          </Col>
          <Col md={8}>
            <h2>About Me</h2>
            <p>
              I am a full-stack developer with experience in React, Flask, and modern web tools.
              I love building user-friendly applications and learning new technologies.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
