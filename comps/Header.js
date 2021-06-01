import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const exampleContent = {
  links: [
    {
      text: "BOATS",
      link: "#boatsSection",
      isButton: false,
      classes: ""
    },
    {
      text: "CONTACT US",
      link: "#contactsSection",
      isButton: false,
      classes: ""
    },
    {
      text: "Tickets",
      link: "https://feverup.com/m/99106",
      isButton: true,
      variant: "warning",
      classes: "p-2",
      external: true
    }
  ],
  brand: {
    image: "logo-sm.png",
    link: "#topSection"
  }
}

const Header = ({ content }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <nav>
      <Navbar collapseOnSelect expand="sm" fixed="top" style={{ transition: "0.5s" }} className={scrolled ? "p-0 bg-primary p-0 shadow-lg" : "bg-transparent shadow-none"}>
        <Container className="d-flex justify-content-between">
          <Navbar.Brand id='brand' style={scrolled ? { opacity: 1 } : { opacity: 0 }} href={exampleContent.brand.link}>
            <img src={exampleContent.brand.image} alt="logo" style={{ transition: "0.5s", margin: "3px 0" }} height={scrolled ? "60em" : "70em"}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="d-flex ms-auto align-items-center">
              {exampleContent.links && exampleContent.links.map((item) =>
                <Nav.Link key={item.text + "header-link"} className="text-light ms-auto" href={item.link} target={item.external ? "_blank" : null}>
                  {item.isButton ? <Button className={item.classes} variant={item.variant}>{item.text}</Button> : item.text}
                </Nav.Link>
              )}
            </Nav >
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </nav >
  );
}

export default Header;