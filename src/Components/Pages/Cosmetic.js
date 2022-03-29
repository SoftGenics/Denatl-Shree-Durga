import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
function Cosmetic() {
  return (
    <div>
        <Image src='images/root.png' fluid style={{width:'100%'}}></Image>
        <Container style={{marginTop:'5rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          
          <h2 className='mt-3'><strong>What is a Cosmetics Denstistry?</strong></h2>
          <hr></hr>
          <p><strong>A Cosmetics Denstistry</strong>A Cosmetics Denstistry is a dental procedure involving the removal of the soft center of the tooth, the pulp. The pulp is made up of nerves, connective tissue, and blood vessels that help the tooth grow.</p>
          <p>n the majority of cases, a general dentist or endodontist will perform a Cosmetics Denstistry while you’re under local anesthesia.</p>
          <br></br>
          <p>Learn more about this common procedure, as well as the potential risks involved.</p>
          <br></br>
          <Image src='images/rootc.jpg' style={{width:'20rem', height:'60vh'}}></Image>
          <h2><strong>When is a Cosmetics Denstistry needed?</strong></h2> <hr></hr>
          <p>A Cosmetics Denstistry is performed when the soft inner part of a tooth, known as the pulp, is injured or becomes inflamed or infected.</p>
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
          <p >The most common symptoms of damaged pulp include pain in your tooth, and swelling and a sensation of heat in your gums. Your dentist will examine the painful tooth and take X-rays to confirm the diagnosis. Your dentist may refer you to an endodontist if they think you need a Cosmetics Denstistry.</p>
          <br className='mb-5'></br>
        </Container>
        <Footer />
    </div>
  )
}

export default Cosmetic