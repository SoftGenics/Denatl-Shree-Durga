import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <Container style={{marginTop:'18rem'}}>
        <h1 style={{marginTop:'5rem', textAlign:'center', color:'#f66840'}}>404 - Not Found! <Link to="/"> Go Home</Link></h1>
        </Container>
    </div>
  )
}

export default NotFound