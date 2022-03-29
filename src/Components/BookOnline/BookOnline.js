import React from 'react'
import {Row, Col, Container,Form} from 'react-bootstrap';
import './BookOnline.css'
import Footer from '../Footer/Footer';
function BookOnline() {
  return (
    <div>
        <Container fluid style={{background:'url(images/hero1.jpg)'}}>
     <Row>
          <Col sm={4}>
          </Col>
     <Col sm={8}>

        <Form className='bookonline'>
               <div className='text-center d-inline mb-b'>
                 <h2 className='mb-5' sty>Book <span style={{color:'#f76840'}}>Online</span></h2>
               </div>
                  <Row>
                    <Col md={6} sm={6}>
                       <Form.Label for="name">Name</Form.Label>
                        <Form.Control type="text" className="form-control" name="name" placeholder="Full Name" />
                        </Col>

                                   <Col md={6} sm={6}>
                                   <Form.Label for="select">Select Age</Form.Label>
                                        <Form.Select className="form-control" name="department">
                                             <option>0-18</option>
                                             <option>18-30</option>
                                             <option>30-60</option>
                                             <option>60-80</option>
                                        </Form.Select>
                                   </Col>
                                    </Row>
                                    <Row>
                                     <Col md={6} sm={6}>
                                     <Form.Label for="telephone">Select Time</Form.Label>
                                        <Form.Control type="time" className="form-control" name="time" placeholder="Time"/>
                                     </Col>
                                     <Col md={6} sm={6}>
                                        <Form.Label for="date">Select Date</Form.Label>
                                        <Form.Control type="date" name="date" className="form-control" />
                                   </Col>
                                    </Row>
                                   <Col md={12} sm={12}>
                                        <Form.Label for="telephone">Phone Number</Form.Label>
                                        <Form.Control type="tel" className="form-control" name="p_number" placeholder="Phone"/>
                                        <Form.Label for="Message">Decribe Problem:</Form.Label>
                                        <Form.Control as="textarea" className="form-control mb-3" rows="5" name="message" placeholder="You can describe your problem here..."></Form.Control>
                                   </Col>
                              <Row>
                              <Col md={12} sm={12}>
                                 <button type="submit" className="form-control" id="cf-submit" >Submit Button</button>
                                 </Col>
                              </Row>
         </Form>
         </Col>
         </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default BookOnline