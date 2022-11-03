import React, { useState } from 'react'
import { useAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const LoginPage = () => {
  const { checkUsername, checkPassword, checkStatus, initStorage, setUserToStorage } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const navigate = useNavigate()


  const loginUser = async() => {
    if(!username.trim() || !password.trim()){
      alert('Some inputs are empty');
      return;
    };



    let user = {
      username,
      password,
      isAdmin
    }

    let res = await checkUsername(username);

    if(!res){
      alert('Username is not found!')
      return;
    }

    // checkUsername(username);

    let check = await checkPassword(username, password)
    if(!check){
      alert('Wrong password!');
      return;
    }

    let status = await checkStatus(username, isAdmin)
    if(!status){
      alert('You are a liar!');
      return;
    }

  setUserToStorage(username)

    
    setUsername('');
    setPassword('');
    setIsAdmin(false);

    navigate('/movies')

  }


  return (
    <div className='ddd1'>
        <h2 className='hhh2'>Авторизация</h2>
        <input className='iii3' type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} value={username}/>
        <input className='iii3' type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
        <Box sx={{ backgroundColor: 'rgb(57, 45, 83)', width: '100px' , display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '5px'}}>
       <Checkbox 
          checked={isAdmin}
          color="warning"
          onChange={handleChange} /> <p>Admin</p>
       </Box>
        <button className='bbb4' onClick={loginUser} >Авторизация</button>
    </div>
  )
}

export default LoginPage