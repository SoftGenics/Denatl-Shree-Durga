import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Iframe from 'react-iframe'
import Footer from '../Footer/Footer';
function Videos() {
  return (
    <div>
      <Container style={{marginTop:'15rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <h2 className='mt-3 mb-3 text-center'><strong>CLINIC VIDEOS</strong></h2>
      <Iframe src= "videos/2.mp4"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
    <Row>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src= "videos/1.mp4"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src= "videos/3.mp4"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src= "videos/4.mp4"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src= "videos/5.mp4"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
      </Col>
    </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Videos