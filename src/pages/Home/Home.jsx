import React from 'react';
import { Button, Container } from 'react-bootstrap';
import promoImg from '../../imgs/Figurs1.png'
import './home.css'

function Home() {
  return (
    <>
      <Container>
        <div>
            <h1>Охрана<br/>природы - это<br/> ты!</h1>
            <Button  style={{backgroundColor: '#FF6B6B', color: '#000000', borderRadius: '32.5px'}}>Очитить природу</Button>  
        </div>
        <img src={promoImg} width={600}/>
      </Container>
    </>
  );
}

export default Home;
