import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

function Footer() {


  return (
    <>
        <Container fluid style={{ backgroundColor: '#4FD566', color: 'black'}}>
          <Container style={{display: 'flex', justifyContent:'center', height:'45px', textAlign:'center'}}>
            <h4>Защитник Природы</h4>
          </Container>
        </Container>
    </>
  )
}

export default Footer 