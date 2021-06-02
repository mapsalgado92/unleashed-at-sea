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
        <title>Unleashed at Sea - Lisbon Boat Festival</title>
        <meta name="description" content="The Ultimate Lisbon Boat Festival, experience the greatest boat concentration party in Portugal. You'll be Unleashed, from the Tagus to the Atlantic, on an unique adventure with dozens of people just as party hungry as yourself." />
        <meta name="keywords" content="unleashed at sea festival boats waves lisbon festa lisboa barco crazy Covid-19 Safe Lisboa Party Festa Lisboa" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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
                <h2 className="mb-0 h3 alternate-font">Sunday - 27.06.2021</h2>
                <h2 className="h3 mb-0 alternate-font">14:30 - 18:30</h2>
              </Container>
            </div>
          </Jumbotron>
        </section>
        <section className="text-center my-5">
          <a id="howToSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container>
            <h2 className="subtitle-text text-warning">{content.howTo.title}</h2>
            <h3 className="text-primary hero-container">{content.howTo.subtitle}</h3>
            <p className="h5 alternate-font hero-container disappear-in-xs">{content.howTo.text}</p>
            <Row className="mt-5 px-sm-5">
              {content.howTo && content.howTo.items.map((item) =>
                <Col md={6} className="mb-5">
                  <Image src={item.image} height="130em" alt={item.title} />
                  <h3 className="header-text text-warning">{item.title}</h3>
                  <p className="px-2 px-lg-5 text-center alternate-font">{item.text}</p>
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
              <Container className="text-light">
                <h2 className="subtitle-text">{content.hero1.title}</h2>
                <h3 className="h3 text-warning hero-container">{content.hero1.subtitle}</h3>
                <Row className="mt-5 px-sm-5 d-flex justify-content-between">
                  {content.hero1 && content.hero1.items.map((item) =>
                    <Col className="d-flex flex-column align-items-center justify-content-start" xs={6} md={2} >
                      <Image src={item.image} className="px-4 mb-2" fluid alt={item.title} />
                      <p className="header-text alternate-font">{item.title}</p></Col>
                  )}
                </Row>
              </Container>
            </div>
          </Jumbotron>
        </section>
        <section className="text-center my-5">
          <a id="boatsSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container>
            <h2 className="subtitle-text text-warning">Our Party Boats</h2>
            <h3 className="header-text text-dark alternate-font hero-container mb-4">Learn more about the boats at our disposal. Each boat is unique and they have different boarding docks (see description). Be decisive and make a reservation if you find the ideal one for you and your crew!</h3>
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
              <Container className="text-light rounded p-4">
                <h2 className="display-2">{content.hero2.title}</h2>
                <h3 className="h3 display-2 text-warning">{content.hero2.subtitle}</h3>
                <p className="h5 alternate-font">{content.hero2.text}</p>
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
  howTo: {
    title: "We’re Taking Over the Tagus River Once Again!",
    subtitle: "Experience the most massive floating event to ever be thrown in Portugal!",
    text: "We have been tied up for far too long! Now it\'s time to break free and party under the Lisbon sun. Dozens of boats, hundreds of pirates and unlimited madness come together to create Lisbon's only aquatic festival. Dance through the Tagus and let our party captains take you on a journey full of surprises. Are you ready to be UNLEASHED?",
    items: [
      {
        title: "Gather Your Crew",
        text: "Form the group you wish to take on this adventure with, or join as a wild card with an individual ticket in a group of like-minded pirates!",
        image: "hug.png",

      },
      {
        title: "Choose Your Ride",
        text: "Select one of the boats available departing between Alcântara and Belém. Make sure you consider your group's size when selecting a Boat.",
        image: "boat.svg",

      },
      {
        title: "Assemble at your Dock",
        text: "Gather at the designated dock at least 30 min before departure and a member of our staff will take you to your boat and give you a briefing.",
        image: "sea.svg",

      },
      {
        title: "Unleash the Beast!",
        text: "Sail in the direction of the music until you find the hundreds of people partying afloat. Bring your inflatables and prepare to jump in the sea and enjoy the water activities.",
        image: "inflatable.svg",

      }]
  },

  hero1: {
    title: "Welcome to Unleashed at Sea",
    subtitle: "This are the just some of the included fetures on this epic odyssey. What are you waiting for?",
    items: [
      {
        title: "4-Hour Boat Hire",
        image: "catamaran.svg"
      },
      {
        title: "DJ Set",
        image: "dj.svg"
      },
      {
        title: "Food & Drinks",
        image: "six-pack.svg"
      },
      {
        title: "Speed Boat Ride",
        image: "powerboat.svg"
      },
      {
        title: "Inflatable Trailers",
        image: "barco-de-banana.svg"
      },
      {
        title: "Cashless Payments",
        image: "cashless-payment.svg"
      },
    ]

  },
  hero2: {
    title: '"We are not here to take part,',
    subtitle: 'We are here to TAKE OVER!"',
  }
}
