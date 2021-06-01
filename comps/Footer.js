import { Jumbotron, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Jumbotron className="d-flex align-items-center justify-content-center bg-dark text-center" bg="dark" style={{
        minHeight: "20vh",
      }} fluid>
        <Container>
          <h1>What are you waiting for?</h1>
        </Container>
      </Jumbotron>
    </footer>
  );
}

export default Footer;