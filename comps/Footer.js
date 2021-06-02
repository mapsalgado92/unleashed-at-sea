import { Jumbotron, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Jumbotron className="d-flex align-items-center justify-content-center bg-dark text-center" bg="dark" style={{
        minHeight: "30vh",
      }} fluid>
        <Container>
          <h1>What are you waiting for?</h1>
          <a className="mx-4 display-3" target="blank" href="https://www.facebook.com/unleashedatsea"><i className="fa fa-facebook-square text-light" /></a>
          <a className="mx-4 display-3" target="blank" href="https://www.instagram.com/unleashedatsea"><i className="fa fa-instagram text-light" /></a>
          <p id="signature" className="mt-3 text-light">Developed by | <span className="text-secondary">MarioJS</span></p>
        </Container>
      </Jumbotron>
    </footer>
  );
}

export default Footer;