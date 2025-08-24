import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="bg-dark text-light text-center py-5" id="home">
      <Container>
        <h1 className="display-4 fw-bold">Hi, I’m Brian Musyimi 👋</h1>
        <p className="lead">A passionate developer building modern web apps</p>
        <Button variant="primary" href="#projects">View My Work</Button>
      </Container>
    </section>
  );
}

export default Hero;
