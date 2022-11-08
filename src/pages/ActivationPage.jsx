import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContextProvider'

const ActivationPage = () => {
    const [value, setValue] = useState('');
    const {accountConfirmation, error, setError} = useAuth();
     
    function sendCode(){
        accountConfirmation(value)
        setValue("")
    }
    useEffect(()=>{
        setError(false)
    }, [])
  return (
    <div className='containerLogin'>

    <div className='ddd1'>
        <h1 className='hhh2'>Активация</h1>
       {error ?  <Alert sx={{width: "200px"}} severity='error'>{error}</Alert> : null}
        <input className='iii3' type="text" placeholder='Ваш код активации' onChange={(e)=> setValue(e.target.value)} value={value}/>
        <button className='bbb4' onClick={sendCode}>Отправить</button>
    </div>
    </div>
  )
}

export default ActivationPage