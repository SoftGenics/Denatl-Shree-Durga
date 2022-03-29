import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WorkProgress() {
  return (
    <div>
        <Container style={{marginTop:'15rem'}}>
        <h1 style={{marginTop:'5rem', textAlign:'center', color:'red'}}><i className="fas fa-bell"/>&nbsp;&nbsp;NO NOTIFICATION YET<br></br></h1>
        <h1 style={{marginTop:'2rem',marginBottom:'2rem', textAlign:'center', color:'red'}}>NO NOTIFICATION YET<br></br>
        <Link to="/"> Go Home</Link></h1>
        </Container>
        
    </div>
  )
}

export default WorkProgress