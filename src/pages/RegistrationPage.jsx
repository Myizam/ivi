import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContextProvider';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';


const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { registerUser, error, setError } = useAuth()

  const addUser = async () => {
    
    if(!email.trim() || !username.trim() || !password.trim() || !password2.trim()){
      alert('Some inputs are empty');
      return;
    };

    let formData = new FormData()
    formData.append("email", email)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("password2", password2)



    registerUser(formData);
    setEmail('');
    setUsername('');
    setPassword('');
    setPassword2('');
    console.log(formData);
  }

  useEffect(() => {
    setError(false)
  }, [])
  useEffect(()=>{
    setEmail('');
    setUsername('');
    setPassword('');
    setPassword2('');
  }, [])
  return (
    <div className='containerLogin'>

    <div className='ddd1'>
        <h2 className='hhh2'>Регистрация</h2>
        <input className='iii3' type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} value={email}/>
        <input className='iii3' type="text" placeholder='Введтите имя' onChange={e => setUsername(e.target.value)} value={username}/>
        <input className='iii3' type="password" placeholder='Введите пароль' onChange={e => setPassword(e.target.value)} value={password}/>
        <input className='iii3' type="password" placeholder='Подтвердите пароль' onChange={e => setPassword2(e.target.value)} value={password2}/>
        <Box sx={{ backgroundColor: 'rgb(57, 45, 83)', width: '100px' , display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '5px'}}></Box>
        {error ? <Alert severity='error'>{error}</Alert> : null}
        <button className='bbb4' onClick={addUser} >Регистрация</button>
    </div>
    </div>
  )
}

export default RegistrationPage