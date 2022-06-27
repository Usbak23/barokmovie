import { Col, Container, Row, Button } from "react-bootstrap"


const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center " >
        <Row>
          <Col>
            <div className="tittle">NONTON FILM GRATIS</div>
            <div className="tittle">GAK PAKE BAYAR</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href="#trending">Lihat Semua list</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro