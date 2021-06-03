import { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import emailjs, { init } from 'emailjs-com';

const ContactForm = ({ selectedBoat, setSelectedBoat, promos }) => {

  const [info, setInfo] = useState({ enquiry: "Hello, I would like to know more about the Unleashed at Sea event. \n\n[...]" })
  const [changed, setChanged] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [validated, setValidated] = useState({ attempted: false, valid: false })

  const handleChange = (e) => {
    let newUpdate = { ...info }
    newUpdate[e.target.id] = e.target.value
    setInfo(newUpdate)
  }

  useEffect(() => {
    init("user_OD34z4OcHU5rI3lbSoL5i")
  }, [])

  useEffect(() => {
    setChanged(true)
  }, [selectedBoat])

  useEffect(() => {
    if (changed) {
      setEnquiry()
      setChanged(false)
    }
  }, [changed, info])


  const setEnquiry = () => {
    selectedBoat ?
      setInfo({ ...info, enquiry: "Hello Unleashed at Sea Team, I have a Promo Code and would like to redeem it. I am interested in the boat indicated in the Form above. \n\n[...]" }) :
      setInfo({ ...info, enquiry: "Hello Unleashed at Sea Team, I would like to know more about the event. \n\n[...]" })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (selectedBoat) {
      if (promos.find((promo) => {
        return promo.code === info.Promo
      })) {
        setValidated({ attempted: true, valid: true })
      } else {
        setValidated({ attempted: true, valid: false })
        return 0
      }
    }

    setSubmitted(true)


    let templateParams = {
      ...info,
      subject: "New Enquiry Unleashed at Sea",
      type: "General Enquiry",
      Boat: "No Boat",
      Promo: "No Promo"
    }

    if (selectedBoat) {
      templateParams.Boat = selectedBoat
      templateParams.Promo = info.Promo
      templateParams.type = "Promo Code"
    }

    console.log(templateParams)

    emailjs.send('service_hpnbqeu', 'template_4oelqeo', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  };

  return (
    <Form className="hero-container" onSubmit={handleSubmit}>
      <Form.Group as={Row} className="text-center text-lg-left justify-content-center">
        <Col sm={6} lg={4} className="mb-2">
          <Form.Label >First Name</Form.Label>
          <Form.Control type="text" className="px-3" placeholder="First Name (required)" onChange={handleChange} id="first" required />
        </Col>
        <Col sm={6} lg={4} className="mb-2">
          <Form.Label >Last Name</Form.Label>
          <Form.Control type="text" className="px-3" placeholder="Last Name (required)" onChange={handleChange} id="last" required />
        </Col>
        <Col sm={6} lg={4} className="mb-2">
          <Form.Label >E-Mail Address</Form.Label>
          <Form.Control type="email" className="px-3" placeholder="E-mail (required)" onChange={handleChange} id="email" required />
        </Col>
        <Col sm={6} lg={4} className="mb-2">
          <Form.Label >Phone Contact</Form.Label>
          <Form.Control type="phone" className="px-3" placeholder="Phone with Country Code (required)" onChange={handleChange} id="phone" required />
        </Col>
        <Col sm={6} lg={4} className="mb-2">
          <Form.Label >Country</Form.Label>
          <Form.Control type="text" className="px-3" placeholder="Country" onChange={handleChange} id="country" />
        </Col>
        <Col sm={6} lg={4} className="mb-2">
          <Form.Label >Group Size</Form.Label>
          <Form.Control type="text" className="px-3" placeholder="Max number of people interested" onChange={handleChange} id="group-size" />
        </Col>

        {selectedBoat &&
          <>
            <Alert variant="dark" className="px-5 text-light"><p>If you have a Promo Code, introduce it bellow and submit this form. If that's not the case feel free to contact us through a regular enquiry or in our social media!</p>
              <Button variant="danger" onClick={() => setSelectedBoat(null)} size="sm" >I don't have a Code</Button>
            </Alert>

            <Col md={6} className="mb-2">
              <Form.Label>Promo Code</Form.Label>
              <Form.Control type="text" className="px-3" placeholder="Enter valid Promo Code" onChange={handleChange} id="Promo" />
            </Col>
            <Col md={6} className="mb-2">
              <Form.Label>Selected Boat</Form.Label>
              <Form.Control type="text" className="px-3" className="text-danger text-center" disabled={true} value={selectedBoat} id="Boat" />
            </Col>
          </>
        }

        <Col className="mb-2">
          <Form.Label>Ask us what you need to know!</Form.Label>
          <Form.Control as="textarea" value={info.enquiry} onChange={handleChange} id="enquiry" className="p-2" style={{
            height: "10em", backgroundColor: "rgba(5, 5, 5, 0.02)"
          }} />
        </Col>

      </Form.Group>

      <Form.Group as={Row} className="justify-content-center">
        <Col lg="6" className="text-center">
          <Button type="submit" disabled={submitted} variant="warning">Submit your enquiry</Button>
          {(validated.attempted && !validated.valid) && <Alert className="h5 mt-2" variant="danger">Please insert a valid Promo Code</Alert>}
          {submitted && <Alert className="h5 mt-2" variant="success">Your enquiry has been sent, we will get in touch with you shortly!</Alert>}
        </Col>
      </Form.Group>
    </Form>
  )
}

export default ContactForm
