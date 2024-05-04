import { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import backlogo from '../public/glavlog.png'
import userlogo from '../public/Vector.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <>
          <Header>
            <img src={backlogo} alt="Лого защитник"></img>
            <h3>Защитник Природы</h3>

            <ul className='headerul'>
              <li>Главная</li>
              <li>Статистика</li>
              <li>Обратная связь</li>
            </ul>

            <img src={userlogo} alt="Лого защитник"></img>
          </Header>

        

            <Content>
              <h1>Охрана природы - это ты!</h1>
              <Button className={'Button1'} onclick={() => setCount()} label={'Очистить природу'}/> 
            </Content>
          
          <Footer>
            <h6>Все права защищены!</h6>
          </Footer>

    </>
  )
}

export default App
