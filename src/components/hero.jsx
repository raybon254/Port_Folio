import { Container, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-dark text-light text-center py-5" id="home">
      <Container>
        <h1 className="display-4 fw-bold">Hi, I’m Brian Musyimi 👋</h1>
        <p className="lead">A passionate developer building modern web apps</p>

        <div className="d-flex justify-content-center gap-4 my-4">
          <a
            href="https://github.com/raybon254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/BRIAN MUSYIMI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="musyimib449@gmail.com"
            className="text-light fs-4"
          >
            <FaEnvelope />
          </a>
        </div>

        <Button variant="primary" href="#projects">
          View My Work
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
