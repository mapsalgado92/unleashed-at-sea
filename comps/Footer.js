import { Jumbotron, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Jumbotron className="d-flex align-items-center justify-content-center bg-dark pt-3" bg="dark" style={{
        minHeight: "30vh",
      }} fluid>
        <attribute className="d-none">
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </attribute>
        <Container className="text-center">
          <h1>#unleashedatsea</h1>
          <a className="mx-4 display-3" target="blank" href="https://www.facebook.com/unleashedatsea"><i className="fa fa-facebook-square text-light" /></a>
          <a className="mx-4 display-3" target="blank" href="https://www.instagram.com/unleashedatsea"><i className="fa fa-instagram text-light" /></a>
          <p id="signature" className="mt-3 alternate-font">Developed by <span className="text-warning">MarioJS</span></p>
        </Container>
      </Jumbotron>
    </footer>
  );
}

export default Footer;