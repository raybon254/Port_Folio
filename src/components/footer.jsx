import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Raybon. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
