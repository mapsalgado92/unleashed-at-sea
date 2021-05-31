import Head from 'next/head'
import { Jumbotron, Container, Button, Image } from 'react-bootstrap'
import { useState, useEffect } from "react"
import List from '../comps/List'
import ContactForm from '../comps/ContactForm'

export default function Home() {
  const [boats, setBoats] = useState(null)
  const [promos, setPromos] = useState(null)
  const [selectedBoat, setSelectedBoat] = useState(null)

  useEffect(() => {
    fetch("/api/data").then(res => res.json()).then(data => {
      setBoats(data.boats)
      setPromos(data.promos)
    })
  }, [])

  const handleSelectBoat = (boat) => {
    setSelectedBoat(boat)
  }


  return (
    <>
      <Head>
        <title>Unleashed at Sea - Boat Festival</title>
        <meta name="description" content="The Ultimate Lisbon Boat Festival" />
        <meta name="keywords" content="unleashed at sea festival boats waves lisbon" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" />
      </Head>

      <main style={{ minHeight: "100vh" }}>
        <section id="topSection" className="mb-2 text-center">
          <Jumbotron className="d-flex align-items-center justify-content-center" style={{
            backgroundColor: '#FFF',
            backgroundSize: "cover",
            minHeight: "100vh",
            maxHeight: "95vh",
            overflow: "hidden",
          }} fluid>
            <video playsInline autoPlay muted loop height="inherit">
              <source src="bg-video.mp4" type="video/mp4"></source>
            </video>



            <Container className="position-absolute text-light d-flex flex-column align-items-center">
              <Image src="logo-main.png" width="100%" className="mb-n5 "></Image>
              <h1 className="d-none">Unleashed at Sea, The Ultimate Boat Party in Lisbon</h1>
              <h2 className="border-top border-3 w-50 display-4">27.06.2021</h2>
            </Container>
          </Jumbotron>
        </section>

        <section className="text-center my-4">
          <a id="howToSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <h1 className="subtitle-text text-warning">How To Section</h1>
          <p>CONTENT</p>
          <p>CONTENT</p>
          <p>CONTENT</p>
          <p>CONTENT</p>
          <p>CONTENT</p>
          <p>CONTENT</p>
          <p>CONTENT</p>
          <p>CONTENT</p>
        </section>

        <section className="text-center my-4">
          <a id="hero1Section" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Jumbotron className="d-flex align-items-center justify-content-center" style={{
            background: "url('hero3.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            overflow: "hidden"
          }} fluid >
            <div className="card-overlay py-5 px-2" style={{ height: "100%", width: "100%" }}>
              <Container className="text-light rounded p-4">
                <h2 className="subtitle-text">{content.hero1.title}</h2>
                <h3 className="header-text">{content.hero1.subtitle}</h3>
                <p className="h5">{content.hero1.text}</p>

              </Container>
            </div>

          </Jumbotron>
        </section>

        <section className="text-center my-4">
          <a id="boatsSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container>
            <h2 className="subtitle-text text-warning">Our Boat Selection</h2>
            <List boats={boats} setSelectedBoat={setSelectedBoat} />
          </Container>
        </section>

        <section className="text-center my-4">
          <a id="hero2Section" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Jumbotron className="d-flex align-items-center justify-content-center " style={{
            background: "url('hero1.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "hidden"
          }} fluid >
            <div className="card-overlay py-5 px-2" style={{ height: "100%", width: "100%" }}>
              <Container className="text-light rounded p-4">
                <h2 className="subtitle-text">{content.hero1.title}</h2>
                <h3 className="header-text">{content.hero1.subtitle}</h3>
                <p className="h5">{content.hero1.text}</p>
              </Container>
            </div>
          </Jumbotron>
        </section>

        <section className="mb-4 text-center">
          <a id="contactsSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container>
            <h2 className="subtitle-text text-center text-warning">Contact Us</h2>
            <ContactForm promos={promos} selectedBoat={selectedBoat} setSelectedBoat={setSelectedBoat} />
          </Container>
        </section>

      </main>
    </>
  )
}


const content = {
  hero1: {
    title: "Dummy Content",
    subtitle: "- Dummy Content -",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor dui quis finibus ultrices. Proin at massa metus. Integer mollis eleifend turpis, eget commodo ante dapibus in. Quisque vulputate nec felis id egestas. In viverra magna vitae pulvinar blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ornare sapien dolor, vitae vulputate enim vulputate ac."
  }
}
