import Head from 'next/head'
import { Jumbotron, Container, Button, Image, Row, Col, Alert } from 'react-bootstrap'
import { useState, Fragment } from "react"
import List from '../comps/List'
import ContactForm from '../comps/ContactForm'
import { connectToDatabase } from '../utils/database'

export async function getStaticProps() {
  const { db } = await connectToDatabase()
  const boats = await db.collection("boats").find({}).sort({ price: 1 }).toArray()
  const promos = await db.collection("promos").find({}).toArray()

  return ({
    props: {
      boats: JSON.parse(JSON.stringify(boats)),
      promos: JSON.parse(JSON.stringify(promos))
    },
    revalidate: 120
  })
}

export default function Home(props) {
  const [boats, setBoats] = useState(props.boats)
  const [promos, setPromos] = useState(props.promos)
  const [selectedBoat, setSelectedBoat] = useState(null)

  return (
    <Fragment>
      <Head>
        <title>Unleashed at Sea - The Lisbon Boat Festival</title>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "http://schema.org",
                "@type": "Event",
                location: {
                  "@type": "Place",
                  name: "Lisbon, Tagus River",
                  address: ""
                },
                name: "Unleashed at Sea",
                offers: {
                  "@type": "Offer",
                  "minPrice": "69.00",
                  "priceCurrency": "€",
                  "url": "https://feverup.com/m/99106",
                  price: "",
                  availability: "LimitedAvailability",
                  validFrom: "2021-06-64T18:30"
                },
                url: "https://unleashedatsea.com",
                startDate: "2021-06-27T14:30",
                duration: "PT4H00M",
                image: "https://unleashedatsea.com/hero1.jpg",
                description: "Experience the most massive floating event to ever be thrown in Portugal. You'll be Unleashed, from the Tagus to the Atlantic, on an unique adventure with dozens of people just as party hungry as yourself. Are you ready to be Unleashed?",
                eventStatus: "EventScheduled",
                organizer: "",
                eventAttendanceMode: "OfflineEventAttendanceMode",
                endDate: "2021-06-27T18:30",
                performer: "",


              }
            )
          }} />


        <meta name="description" content="The Ultimate Lisbon Boat Festival, experience the greatest boat concentration party in Portugal. You'll be Unleashed, from the Tagus to the Atlantic, on an unique adventure with dozens of people just as party hungry as yourself." />
        <meta name="keywords" content="unleashed at sea festival boats waves lisbon festa lisboa barco crazy Covid-19 Safe Lisboa Party Festa Lisboa" />

        <meta property="og:title" content="Unleashed at Sea - The Lisbon Boat Festival" />
        <meta property="og:description" content="Experience the greatest boat concentration party in Portugal. Are you ready to be Unleashed?" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unleashedatsea.com/hero1.jpg" />
        <meta property="og:url" content="https://unleashedatsea.com" />

        <link rel="canonical" href="https://unleashedatsea.com" />

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

      <main>
        <section className="mb-4 text-center" style={{ height: "100vh" }}>
          <Jumbotron className="d-flex align-items-center justify-content-center bg-primary" style={{
            backgroundColor: '#FFF',
            backgroundSize: "cover",
            minHeight: "100vh",
            maxHeight: "100vh",
            overflow: "hidden"
          }} fluid>
            <video playsInline autoPlay muted loop style={{ objectFit: "cover" }}>
              <source src="bg-video.mp4" type="video/mp4"></source>
            </video>
            <div className="position-absolute text-light d-flex flex-column align-items-center justify-content-center card-overlay" style={{ height: "100vh", width: "100%" }}>
              <Container>
                <Image src="logo-sm.png" className="border-bottom border-2" style={{ maxHeight: "50vh" }} fluid></Image>
                <h1 className="d-none">Unleashed at Sea</h1>
                <h2 className="h1">The Lisbon Boat Festival</h2>
                <h2 className="mb-0 h3 alternate-font">Sunday - 27.06.2021</h2>
                <h2 className="h3 mb-0 alternate-font">14:30 - 18:30</h2>
              </Container>
            </div>
          </Jumbotron>
        </section>


        <section className="text-center my-5">
          <a id="howToSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container className="hero-container">
            <h2 className="subtitle-text text-warning">{content.howTo.title}</h2>
            <h3 className="text-primary hero-container">{content.howTo.subtitle}</h3>
            <p className="h5 alternate-font">{content.howTo.text}</p>
            <Row className="mt-5 ">
              {content.howTo && content.howTo.items.map((item, index) =>
                <Col md={6} className="mb-3 mx-auto" key={"howTo" + index}>
                  <Image src={item.image} width="30%" fluid alt={item.title} />
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
              <Container className="text-light hero-container">
                <h2 className="subtitle-text">{content.hero1.title}</h2>
                <h3 className="h3 text-warning ">{content.hero1.subtitle}</h3>
                <p className="hero-container alternate-font">{content.hero1.text}</p>
                <Row className="mt-5 d-flex justify-content-around">
                  {content.hero1 && content.hero1.items.map((item, index) =>
                    <Col key={"hero1" + index} className="d-flex flex-column align-items-center justify-content-start" xs={4} sm={3} md={2} >
                      <Image src={item.image} width="60%" className="mb-2" fluid alt={item.title} />
                      <p className="h6">{item.title}</p></Col>
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
            <h3 className="h3 text-primary">Tickets available until the 25th of June at 23:59</h3>
            <p className="h5 text-dark alternate-font hero-container mb-4">Each boat is unique and has its own boarding dock (see description). Make sure you take into account the boat’s passenger capacity when picking your ride.</p>
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
                <h2 className="display-3">{content.hero2.title}</h2>
                <h3 className="h3 display-3 text-warning">{content.hero2.subtitle}</h3>
                <p className="h5 alternate-font">{content.hero2.text}</p>
              </Container>
            </div>
          </Jumbotron>
        </section>

        <section className="my-5 text-center">
          <a id="contactsSection" style={{ position: "relative", top: "-5em", display: "hidden" }}></a>
          <Container className="hero-container">
            <h2 className="subtitle-text text-center text-warning">Contact Us</h2>
            <h3 className="h3 text-primary">Get in touch with us to clarify any doubts you might have.</h3>
            <p className="h5 alternate-font mb-3">Fill the form bellow and submit the your message. We will get in touch with you as soon as we can!</p>
            <ContactForm promos={promos} selectedBoat={selectedBoat} setSelectedBoat={setSelectedBoat} />
          </Container>
        </section>
      </main>
    </Fragment>
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

      },
      {
        title: "Have Fun & Be Safe",
        text: "By placing each group in a private boat we avoid crowds and enforce COVID-19 safety standards in a way that amplifies our unity while still partying as one",
        image: "safety.svg",

      }]
  },

  hero1: {
    title: "Welcome to Unleashed at Sea",
    subtitle: "Want to learn how to party like a pirate?",
    text: "The first step is to gather your crew and book your own private boat. If you can't find a crew, join us as a 'solo pirate' and hop on a boat full of like-minded salty strangers. Once you board your boat, it's time to be unleashed! Dozens of boats will come together under one flag to follow our Mother boat through the Tagus and into the sea. We will dance, drink and party; together but separate. One boat to lead us, one song to unite us, dozens of boats to protect us. And when the scorching sun gets you craving for a swim, join one of our many water activities or dive into the Tagus during our refreshing swimming stop. Covid can't stop the takeover. Are you ready to be UNLEASHED?",
    items: [
      {
        title: "4h Boat Hire",
        image: "catamaran.svg"
      },
      {
        title: "DJ Set & MC",
        image: "dj.svg"
      },
      {
        title: "Food & Drinks",
        image: "six-pack.svg"
      },
      {
        title: "Speed Boat",
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
