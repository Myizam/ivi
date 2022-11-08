import React, { useState } from 'react'
import { useAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';


const LoginPage = () => {
  const { loginUser, error, setError } = useAuth();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const loginuser = async() => {
    if(!email.trim() || !password.trim()){
      alert('Some inputs are empty');
      return;
    };

    let formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)
    loginUser(formData, email)

    setEmail('');
    setPassword('');
    navigate('/')
  }

  


  return (
    <div className='containerLogin' >
    <div className='ddd1'>
        <h2 className='hhh2'>Войти в аккаунт</h2>
        <input className='iii3' type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} value={email}/>
        <input className='iii3' type="password" placeholder='Пароль' onChange={e => setPassword(e.target.value)} value={password}/>
        <Box sx={{ backgroundColor: 'rgb(57, 45, 83)', width: '100px' , display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '5px'}}>
       
       </Box>
       {error ? <Alert severity='error'>{error}</Alert> : null}
        <button className='bbb4' onClick={loginuser}>Войти </button>
      <button className='bbb5' onClick={() => navigate('/restore')}>Забыли пароль?</button>

    </div>
    </div>
  )
}

export default LoginPage