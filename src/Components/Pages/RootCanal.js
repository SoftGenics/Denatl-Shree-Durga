import React from 'react'
import {Row, Col, Container, Image, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'

function Features() {
  return (
    <>
  <Container>
    <Row>
      <Col md={8}>
        <Container style={{marginTop:'15rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <Image src='images/root.png'></Image>
          <h2 className='mt-3'><strong>What is a root canal?</strong></h2>
          <hr></hr>
          <p><strong>A root canal</strong>A root canal is a dental procedure involving the removal of the soft center of the tooth, the pulp. The pulp is made up of nerves, connective tissue, and blood vessels that help the tooth grow.</p>
          <p>n the majority of cases, a general dentist or endodontist will perform a root canal while you’re under local anesthesia.</p>
          <br></br>
          <p>Learn more about this common procedure, as well as the potential risks involved.</p>
          <br></br>
          <Image src='images/rootc.jpg' style={{width:'20rem', height:'60vh'}}></Image>
          <h2><strong>When is a root canal needed?</strong></h2> <hr></hr>
          <p>A root canal is performed when the soft inner part of a tooth, known as the pulp, is injured or becomes inflamed or infected.</p>
          <br></br>
          <p>The crown of the tooth — the part you can see above your gums — can remain intact even if the pulp is dead. Removing injured or infected pulp is the best way to preserve the structure of the tooth.</p>
          <br></br>
          <p>Common causes of damage to the pulp include:</p>
          <br></br>
          <ul>
            <li>deep decay due to an untreated cavity</li>
            <li>multiple dental procedures on the same tooth</li>
            <li>a chip or crack in the tooth</li>
            <li>n injury to the tooth (you might injure a tooth if you get hit in the mouth; the pulp can still be damaged even if the injury doesn’t crack the tooth)</li>
          </ul>
          <br></br>
          <p >The most common symptoms of damaged pulp include pain in your tooth, and swelling and a sensation of heat in your gums. Your dentist will examine the painful tooth and take X-rays to confirm the diagnosis. Your dentist may refer you to an endodontist if they think you need a root canal.</p>
          <br className='mb-5'></br>
        </Container>
      </Col>
      <Col md={4}>
    <Container className='review-container'>
      <br></br>
      <br></br>
        <Carousel fade>
        <Carousel.Item>
   <p> <i className="fas fa-quote-left"/>&nbsp;&nbsp;&nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;&nbsp;&nbsp; <i className="fas fa-quote-right"></i></p>
   <br></br>
   <nr></nr>
   <br></br>
   <h4>-Prashant</h4>
  </Carousel.Item>
  <Carousel.Item>
<p> <i className="fas fa-quote-left"/> &nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. &nbsp;&nbsp;&nbsp;<i className="fas fa-quote-right"></i></p>
<h4>-Niraj</h4>
  </Carousel.Item>
  <Carousel.Item>
<p> <i className="fas fa-quote-left"/>&nbsp;&nbsp;&nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. &nbsp;&nbsp;&nbsp;<i className="fas fa-quote-right"></i></p>
<h4>-Isha</h4>
  </Carousel.Item>
</Carousel>
        </Container>
        <br></br>
        <Container className='our-service-container'>
          <br></br>
          <h2 >Our Services</h2>
          <br></br>
          <Link><h4>General&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <i class="fas fa-angle-double-right"></i></h4> </Link> <hr></hr>
          <Link><h4>Cosmetic Dentistry&nbsp; &nbsp;  <i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr> 
          <Link><h4>Emergency Dentistry<i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr> 
          <Link><h4>Surgical &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr>
          <Link><h4>Invisalign&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr>   
          <Link><h4>Orthodontics &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr>   
          <Link><h4>Pediatric Dentistry &nbsp; &nbsp; <i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr>   
          <Link><h4>Restorative Dentistry <i class="fas fa-angle-double-right"></i></h4></Link> <hr></hr>  
          <br></br> 
          </Container>
      </Col>
    </Row>
  </Container>
  <br></br>
  <Footer />
    </>
  )
}


export default Features
