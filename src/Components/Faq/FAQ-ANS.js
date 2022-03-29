import React, { useState } from 'react';
import FAQ from './Faq';
import './Faq.css';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function FAQ_ANS() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Do cosmetic treatments improve my oral health?',
      answer: 'While it might seem like every treatment that falls under the umbrella of cosmetic dentistry would only have aesthetic benefits, many can be beneficial to your oral health. Veneers can be placed to protect the teeth of a patient whose enamel has worn thin, dental implants protect your jawbone against bone loss and prevent your teeth from shifting, and crowns help to protect the tooth beneath them from further decay. While there are certainly treatments that are purely aesthetic, no treatment will be harmful to your oral health; after all, cosmetic dentists are concerned with the health of your mouth as well as your confidence in your smile.',
     
      open: false
    },
    {
      question: 'Is there a fast, simple way to fix the gap in my teeth?  ',
      answer: 'If your smile is straight but you have a gap between two of your teeth, it may seem like too much effort to spend one to three years with braces or Invisalign, as well as a lifetime of wearing retainers at night, in order to close it. Thankfully, there are a couple of ways you can quickly and easily hide the gap. The first is dental bonding, which is a tooth-colored material that is applied to the teeth and buffed until it matches the shininess of your natural teeth. It’s incredibly fast, taking as little as 30 minutes, but it will likely need to be redone every four to eight years. The second method is veneers, which can be placed over your existing teeth to erase the gap. Veneers will take a few visits to complete, but they only need to be replaced every 15 years or so',
      open: false
    },
    {
      question: 'Will my dental insurance pay for cosmetic treatments?',
      answer: 'How much your dental insurance helps with costs and what they cover depends upon the company and what plan you have with them. If a treatment has a restorative purpose, such as a crown or dental bonding, most insurance companies will at least help with the cost. There are cosmetic treatments that most dental insurances will not cover, however, such as teeth whitening treatments and dental implants. This is usually because the companies consider such treatments to be elective cosmetic procedures. The fact that there are so many treatment options for such an array of dental issues is a testament to how far dentistry has come in recent decades. While navigating the complex world of cosmetic dentistry procedures can be daunting at first, most patients can find a treatment that fits their budget while also giving them the desired look or benefit, ensuring that you can walk away from our offices in love with your smile.',
      open: false
    }, 
    {
        question: 'How do I fix chipped or broken teeth?',
        answer: 'If you’ve chipped or broken a tooth, there are several ways that you can fix itsappearance and perhaps protect it from future damage. Minor chips or breaks can be repaired quickly and easily with dental bonding, but larger breaks may need veneers. If you’ve broken the tooth severely, however, it might be best to shave the tooth down and cap it with a crown; this will protect the sensitive root and keep the tooth from further damage. ',
        open: false
      },
      {
        question: 'Can my broken tooth be fixed?',
        answer: 'Yes, as a general dentist we can fix your broken tooth using a variety of dental restorations. This includes using dental veneers, dental crowns, and a bonding procedure. All of these are effective for restoring teeth that have been cracked or chipped. We can discuss the pros and cons of each option with you in detail during an exam and consultation.',
        open: false
      },
      {
        question: 'How can I get rid of sensitive teeth?',
        answer: 'Sensitive teeth can be due to an infection or erosion. If it is an infection, cavities, etc. we can treat the problem and your teeth will start to feel better. If, however, your teeth are sensitive due to erosion that is a more serious problem. Once your enamel has eroded away, it can \'t grow back. You can use a desensitizing toothpaste that will prevent irritation, but this is a temporary solution. We often recommend that you wear dental crowns in order to protect your sensitive teeth and to replace the enamel that has worn away. As a general dentist, we place crowns on a regular basis and would be happy to discuss this procedure with you in detail.',
        open: false
      },
      {
        question: 'Are there risks associated with not treating a cavity?  ',
        answer: 'Tooth decay (cavities) can spread if left untreated. When you deal with them early on, the decayed portion of your tooth can be removed, and your tooth restored with relative ease. If you delay, the decay can spread and create the need for a more invasive procedure such as a root canal.',
        open: false
      },
      {
        question: 'When Can My Child Start Using A Fluoride Toothpaste & Mouthwash?',
        answer: 'At around ages 5 to 6 your child should be able to rinse and spit. You can begin experimenting using a low fluoride toothpaste and mouthwash. “We recommend that children use a mouthwash too,” says Pediatric Oral Surgeon Dr. xyz. “In many instances children have overlapping teeth a toothbrush just can’t reach.” ',
        open: false
      },
      {
        question: 'What Do I Do If My Child Has A Chipped Tooth?',
        answer: '“If your child has chipped a tooth, we\'d adise that you schedule a visit with us as soon as possible so that we can evaluate the severity of the ‘chip’ or fracture,” Dr. xyz says. “Frequently we just file or smooth the rough edge, but there are cases when it may need to be repaired or bonded.” says Golden. Dr. Jones adds, “If your child has a large fracture and the nerve of their tooth is exposed, the tooth might need to be removed. Treatment all depends on whether it’s an adult tooth or a baby tooth and if the child is in any pain”.',
        open: false
      },
      {
        question: 'When Should My Child Have Their First Dental X-Rays? ',
        answer: '“In most cases dental x-rays aren’t needed until after age 5 unless there has been some sort of trauma,” says xyz. “From age 7 on we’ll want to start routine dental x-rays\' to examine dental development and any potential areas that require attention” says Pediatric Dentist – xyz. Many parents have concerns over their child receiving dental x-rays. Digital dental xrays are very safe and help dentists see things that are not apparent during a routine dental examination.',
        open: false
      },
      {
        question: 'What Toothpaste Should My Child Be Using and How Much?',
        answer: 'Pediatric dentist Dr. xyz says “Because children under 6 tend to swallow more toothpaste than they actually use, I’d recommend a low fluoride toothpaste for younger kids” (such as Colgate Sparkling Mint Gel ages 2-6). ',
        open: false
      },
      {
        question: 'Will You Show My Child How To Brush Their Teeth?',
        answer: 'Learning how to brush your teeth at a young age will establish good dental habits for a lifetime. Pediatric dentists and oral hygienists are well versed in demonstrating tooth brushing techniques to children. We will teach your child how to brush their teeth properly. ',
        open: false
      },
      {
        question: 'When Should My Child Begin Flossing?',
        answer: 'If there are no visible gaps between a child’s teeth, typically they may begin flossing. It’s worth asking your child’s dentist on your next visit if you feel it’s an appropriate time for them to learn how to floss.',
        open: false
      },
      {
        question: 'Should You Fix Cavities on Baby Teeth?',
        answer: 'Since baby teeth act as space holders for permanent teeth, they shouldn’t be neglected. If decay is left untreated, a child can experience infection and pain. What’s more, if a baby tooth is lost before its ready, it can cause spacing issues that can lead to problems with adult teeth. For these reasons, it’s important to have your child’s baby teeth regularly examined by your local dentist, so he or she can identify any potential problems and repair them as soon as possible.',
        open: false
      },
      {
        question: 'What Can You Do if a Baby Tooth Gets Knocked Out Prematurely?',
        answer: 'If your child loses a baby tooth due to a fall or accident, there are some steps you can take to fix the problem. First, locate the tooth and rinse it with milk, while being careful  not to touch the root with your fingers. Next, gently replace the tooth in the socket. Place sterile gauze over the area and have your child bite down. If possible, visit your dentist as soon as you can. If you aren’t able to reattach the tooth yourself, place it in a clean container of milk and get to your dentist as soon as possible. With timely action, you can get a baby tooth to reattach.',
        open: false
      }

  
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div>
      <Container style={{marginTop:'10rem'}}>
    <br></br>
      <h1 className='mt-3 text-center'>FAQ</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
     
      </Container>
      <Footer />
      </div>

  );
}

export default FAQ_ANS;