import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './OurServices.css'
function OurServices() {
  return (
    <div id="service">
        <Container fluid className='Ourservices'>
            <Container style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <br></br>
            <h2 className="text-center mt-3"><span style={{color:'#f66840'}}>SPECIALITY </span>TREATMENT FOR</h2>
            <Row>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/dental1.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">DENTAL IMPLANTS</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/dental2.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">COSMETIC DENSTISTRY</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/surgical.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">WISDOM TOOTH SURGERY</div>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/dental4.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">SMILE DESIGN/FULL MOUTH REHABILITATION</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/ortho.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">ORTHODONTIC TREATMENT</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/hero2.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">FRACTURE OF JAW & FACE</div>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/hero3.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">DENTAL LASER/BLEEDING & SWOLLEN GUM</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/wf3.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">CAD/CAM CROWN AND BRIDGE</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/root.png' />
                    <div class="overlay top-overlay">
                    <div class="text">ROOT CANAL TREATMENT</div>
                    </div>
                </div>
                </Col>
            </Row>
            </Container>
        </Container>
    </div>
  )
}

export default OurServices