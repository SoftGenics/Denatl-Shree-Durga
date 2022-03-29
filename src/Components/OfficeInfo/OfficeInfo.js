import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import './OfficeInfo.css'

function OfficeInfo() {
  return (
    <div>
        <Container fluid style={{backgroundColor:'#f6feff', padding:'4rem'}}>
            <Row>
                 <Col md={6}>
                     <Container >
                        <h2>CLINIC INFORMATION</h2>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-phone-alt"></i>&nbsp;Phone:&nbsp;<a href='tel:9891116408'style={{color:'rgb(243, 40, 13)', textDecoration:'none'}} >9891116408</a><br></br>
                        </div>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-clock"></i>&nbsp;&nbsp;TIMINGS:
                        </div>
                        <div className=' mt-3 mb-5 office-info-section'>
                        <p>Morning: 10:00 A.M,- 2:00 P.M</p>
                        <p>Sunday:&nbsp;9:00 A.M. -  8:00 P.M.</p>
                        </div>
 
                     </Container>
                </Col>
                <Col md={6}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7000.145855150345!2d77.485962!3d28.687465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97f5266af4423bfb!2sShree%20Durga%20Dental%20Clinic%20Dr.%20MK%20Tyagi!5e0!3m2!1sen!2sus!4v1647850785143!5m2!1sen!2sus"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OfficeInfo