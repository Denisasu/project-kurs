import React from 'react'
import { Container } from 'react-bootstrap'
import { Map, YMaps } from '@pbe/react-yandex-maps'


function Statistics() {
  return (
    <>
        <Container>
            
            <YMaps>
                <div>Статистика(карта показывающая метки)</div>
                <Map defaultState={{ center: [53.346785, 83.776856], zoom: 9 }} />
            </YMaps>
        </Container>
    </>
  );
}

export default Statistics;


