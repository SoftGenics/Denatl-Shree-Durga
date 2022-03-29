import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './About.css'

function About() {
  return (
    <div id="about">
        <Container className='about-container' id="doctor">
        <h2 className="text-center mt-5 mb-5">ABOUT <span style={{color:'red'}}> &nbsp;SHREE DURGA DENTAL CLINIC</span></h2>
        <Container>
            
                <Card >
                <Row className='about-card-wraper '>
                    <Col md={5}>
                    <Card.Img variant="top" src="images/about.png" />
                    <Card.Img variant="top" src="images/about1.webp" />
                    </Col>
                    <Col md={7}>
                    <Card.Body>
                        <Card.Title>Shree Durga Dental Clinic in Govindpuram, Delhi</Card.Title>
                        <Card.Text>
                        <b>S</b>hree Durga Dental Clinic in Delhi. Dentists with Address, Contact Number, Photos, Maps. View Shree Durga Dental Clinic, Delhi on Just
                        </Card.Text>
                        <Card.Title>Location and Overview</Card.Title>
                        <Card.Text>
                        Established in the year 2007, Shree Durga Dental Clinic in Govindpuram is one of the most preferred dentists in the Delhi. The doctor is known to have extensive dental training and to treat all dental problems with efficiency, dedication and precision. The clinic is frequently visited by patients residing in India as well as patients from across the globe. It also has plans on expanding its business in the years to come, owing to its immense success and widespread popularity. The doctor aims at focusing on the patient's satisfaction and making it a pleasant experience for them and has earned a loyal clientele over the years. Their state-of-the-art clinic is well-equipped with the latest of technological instruments to provide high-quality dental treatment to the patients. It can also be easily found as it is in close proximity of Shop No H 520, Govindpuram, H Block, By Side Gda Market.  
                        </Card.Text>
                        <Card.Title>Services offered by Shree Durga Dental Clinic</Card.Title>
                        <Card.Text>
                        Shree Durga Dental Clinic in Delhi offers a host of treatments and cures for a wide range of dental ailments faced by the patients. Few of the dental procedures they offer range from inducing fillings and repairs in the tooth, undertaking root canal surgeries, applying crowns (caps), bridges and implants, teeth whitening as well as extractions (surgical removal) of cavities/milky /disfigured/wisdom teeth. The clinic is also listed under Dentists, Clinics, Laser Dentists. This clinic is operational from Monday to Saturday, from 08:00 - 14:00.For further queries, the patients can call on the clinic's direct helpline number - +(91)-9891116408. Click on the 'Book Appointment' tab above to book a time slot of your convenience.

For more information and contact details of Shree Durga Dental Clinic in Govindpuram, Delhi, please scroll up.
                        </Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                    </Card>
                 
            </Container>
            </Container>
    </div>
  )
}

export default About
