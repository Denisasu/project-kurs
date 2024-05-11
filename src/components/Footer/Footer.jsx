import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

function Footer() {


  return (
    <>
        <Container fluid style={{ backgroundColor: '#D0D0D0', color: 'black'}}>
          <Container style={{display: 'flex', justifyContent:'center', height:'45px', textAlign:'center'}}>
            <p>Защитник Природы</p>
          </Container>
        </Container>
    </>
  )
}

export default Footer 