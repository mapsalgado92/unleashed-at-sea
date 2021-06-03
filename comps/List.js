import { Row, Col, Card, Container, Carousel, Button, Alert, Jumbotron, Image } from 'react-bootstrap'

const List = ({ boats, setSelectedBoat }) => {
  return (

    <Row className="justify-content-center">
      {boats ? boats.map((boat) =>
        <Col xs={12} sm={6} lg={4} className="my-2" key={boat._id + "-boat-card"}>
          <Card className="bg-dark overflow-hidden text-center text-light">
            <Carousel interval={null} prevLabel={""} nextLabel={""}>
              {boat.images && boat.images.map((url, index) => {
                return (
                  <Carousel.Item key={url + "-carousel-image"}>
                    <img
                      className="d-block w-100"
                      src={url}
                      alt={boat.name + index}
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
            <Card.Header className="w-100 position-absolute card-overlay pb-1">
              {boat.type === "special" ?
                <>
                  <h4 className="mb-0 header-text"><span className="text-warning">Special Ticket:</span> {boat.name}</h4>
                  <span className="p alternate-font text-light">{boat.price}€  <i className="fas fa-anchor text-warning" /> {boat.dock} </span>
                  <p className="p text-light mb-0">{boat.description}</p>
                </> :
                <>
                  <h4 className="mb-0 header-text">{boat.name} - {boat.capacity}px {boat.type}</h4>
                  <span className="p alternate-font text-light">{boat.price}€  <i className="fas fa-anchor text-warning" />  {boat.dock} </span>
                </>
              }
            </Card.Header>
            {!boat.inStock && <Image className="position-absolute" style={{ transform: "translate(5%, 50%)" }} width="90%" src="sold-out.png" />}
            <Card.Footer className="bg-dark d-flex p-2">
              <Button variant="outline-warning" href="#contactsSection" disabled={!boat.inStock}
                onClick={() => {
                  setSelectedBoat(boat.name)
                }} className="w-50 mx-1 p-2 text-light">Have a code?</Button>
              <Button variant="primary" disabled={!boat.inStock} href="https://feverup.com/m/99106" target="_blank" className="w-50 mx-1 py-2 px-0">Buy Ticket!</Button>
            </Card.Footer>
          </Card>
        </Col>

      ) : "Loading"}
    </Row>



  )
}

export default List
