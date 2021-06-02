import Head from 'next/head'
import { Jumbotron, Container, Button, Image, Row, Col, Alert } from 'react-bootstrap'
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

  return (
    <>
      <Head>
        <title>Unleashed at Sea - Boat Festival</title>
        <meta name="description" content="The Ultimate Lisbon Boat Festival" />
        <meta name="keywords" content="unleashed at sea festival boats waves lisbon" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" />
      </Head>

      <main style={{ minHeight: "100vh" }}>
        <section id="topSection" className="mb-4 text-center">
          <Jumbotron className="d-flex align-items-center justify-content-center" style={{
            backgroundColor: '#FFF',
            backgroundSize: "cover",
            minHeight: "95vh",
            maxHeight: "100vh",
            overflow: "hidden"
          }} fluid>
            <video playsInline autoPlay muted loop height="inherit">
              <source src="bg-video.mp4" type="video/mp4"></source>
            </video>
            <div className="position-absolute text-light d-flex flex-column align-items-center justify-content-center card-overlay" style={{ height: "100%", width: "100%" }}>
              <Container>
                <Image src="logo-main.png" className="border-bottom border-2" style={{ maxHeight: "50vh" }} fluid></Image>
                <h1 className="d-none">Unleashed at Sea, The Ultimate Boat Party in Lisbon</h1>
                <Alert className="m-auto p-2 mt-2" rounded>
                  <h2 className="mb-0 h3 ">Sunday, 27.06.2021</h2>
                  <h2 className="h3 mb-0">14:30 - 18:30</h2>
                </Alert>
              </Container>


            </div>
          </Jumbotron>
        </section>

        <section className="text-center my-5">
          <a id="howToSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container>
            <h1 className="subtitle-text text-warning">{content.howTo.title}</h1>
            <h1 className="header-text hero-container">{content.howTo.subtitle}</h1>
            <Row className="my-5">
              {content.howTo && content.howTo.items.map((item) =>
                <Col md={6} className="px-sm-5">
                  <Image src={item.image} height="130em" alt={item.title} />
                  <h3 className="header-text text-warning">{item.title}</h3>
                  <p className="px-2 px-lg-5 text-center">{item.text}</p>
                </Col>
              )}
            </Row>
          </Container>
        </section>

        <section className="text-center my-5">
          <a id="hero1Section" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Jumbotron className="d-flex align-items-center justify-content-center" style={{
            background: "url('hero3.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            overflow: "hidden"
          }} fluid >
            <div className="card-overlay py-5 px-2 d-flex  flex-column justify-content-center" style={{ height: "100%", width: "100%", minHeight: "60vh" }}>
              <Container className="text-light p-4 hero-container">
                <h2 className="subtitle-text">{content.hero1.title}</h2>
                <h3 className="h3 text-warning">{content.hero1.subtitle}</h3>
                <p className="h5">{content.hero1.text}</p>
              </Container>
            </div>

          </Jumbotron>
        </section>

        <section className="text-center my-5">
          <a id="boatsSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container>
            <h2 className="subtitle-text text-warning">Our Party Boats</h2>
            <h3 className="header-text text-dark hero-container mb-4">Learn more about the boats at our disposal. Each boat is unique and they have different boarding docks (see description). Be decisive and make a reservation if you find the ideal one for you and your crew!</h3>
            <List boats={boats} setSelectedBoat={setSelectedBoat} />
          </Container>
        </section>

        <section className="text-center my-5">
          <a id="hero2Section" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Jumbotron className="d-flex align-items-center justify-content-center " style={{
            background: "url('hero1.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "hidden",

          }} fluid >
            <div className="card-overlay py-5 px-2 d-flex  flex-column justify-content-center" style={{ height: "100%", width: "100%", minHeight: "60vh" }}>
              <Container className="text-light rounded p-4 hero-container">
                <h2 className="subtitle-text">{content.hero2.title}</h2>
                <h3 className="h3 text-warning">{content.hero2.subtitle}</h3>
                <p className="h5">{content.hero2.text}</p>
              </Container>
            </div>
          </Jumbotron>
        </section>

        <section className="my-5 text-center">
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
    title: "Welcome to Unleashed at Sea",
    subtitle: "We are not here to take part, we are here to takeover!",
    text: "We have been tied up for far too long. This is your chance break free and have the party of a lifetime, with no restrictions to hold you back. Are you ready to be UNLEASHED?"
  },
  hero2: {
    title: "Music, Booze & Waves",
    subtitle: "The perfect ingredients for the greatest of all Sunsets!",
    text: "Centralized Music so all the Crews dance as one. Drinks for all tastes and all kinds party pirates. Water activities to cool off the heat and pump up the adrenaline. What are you waiting for?"
  },
  howTo: {
    title: "The Tagus River Takeover is Back!",
    subtitle: "You can be part of one of the most massive floating events to ever been conducted in Portugal. With Lisbon as background, you can join this massive music and party event, full of surprises and water activities!",
    items: [
      {
        title: "Gather Your Crew",
        text: "Form the group you wish to take on this adventure. You can also join as a Wild Card with an individual ticket in a group of crazy strangers like yourself!",
        image: "hug.svg",

      },
      {
        title: "Choose Your Ride",
        text: "Pick your Sails! Make sure you consider your group's size when selecting a Boat.",
        image: "boat.svg",

      },
      {
        title: "Assemble at your Dock",
        text: "Gather in the designated Dock safely before departure. We can't miss one single minute of madness!",
        image: "sea.svg",

      },
      {
        title: "Unleash the Beast!",
        text: "We are Unleashed at Sea togeher! Prepare to Takeover...",
        image: "safety.svg",

      }
    ]
  }
}
