import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './Doctors.css'

function Doctors() {
  return (
    <div id="doctor">
        <Container className='doctor-container'>
        <h2 className="text-center mt-3 mb-5">OUR <span style={{color:'#f66840'}}> &nbsp;DOCTORS</span></h2>
            <Row>
                <Col ms={6} className='doctors-card-wraper'>
                <Card >
                    
                    <Card.Body>
                        <Card.Title>Dr.MUKESH TYAGI</Card.Title>
                        <Card.Text>D.D.H,MA.F.I.D.S., B'LORE</Card.Text>
                        <Card.Text>Regd N. 993</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col ms={6} className='doctors-card-wraper'>
                <Card >
                    <Card.Body>
                        <Card.Title>Dr. SHEEFALI TYAGI</Card.Title>
                        <Card.Text>B.D.S</Card.Text>
                        <Card.Text>Regd No. 19451</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Doctors