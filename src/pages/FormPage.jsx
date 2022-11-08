import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActivationPage from './ActivationPage'
import myVideo from "./video.mp4"


const FormPage = () => {
    const navigate = useNavigate()
  return (
    <div className='form_div_container' >
        <video autoPlay muted loop id="myVideo">
  <source src={myVideo} type="video/mp4" />
</video>
        <div className='form_div'>
            <p className='form_p'>Подписка Иви</p>
            <p className='form_p p2'>Покажем уникальные сериалы и фильмы Подберем кино по интересам и настроению. &nbsp;&nbsp;&nbsp;&nbsp; Для вас и вашей семьи.</p>
            <div>
            <button className='form_button'  onClick={() => navigate('/payment')}>Попробовать 14 дней за 1$</button>
            <button className='form_cancelBtn' >Отменить можно в любой момент</button>
            </div>
        </div>
    </div>
  )
}

export default FormPage