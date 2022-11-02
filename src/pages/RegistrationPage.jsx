import React, { useState } from 'react'
import { useAuth } from '../context/AuthContextProvider';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';


const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const { registerUser, checkUsername } = useAuth()

  const addUser = async () => {
    
    if(!username.trim() || !password.trim() || !confPass.trim()){
      alert('Some inputs are empty');
      return;
    };

    if(password !== confPass){
      alert('Passwords don\'t match!');
      return;
    }

    let user = {
      username,
      password,
      confPass,
      isAdmin
    }

    let res = await checkUsername(username);

    if(res){
      alert('Username already exists!')
      return;
    }

      // console.log(checkUniqueUsername);

    

    registerUser(user);
    setUsername('');
    setPassword('');
    setConfPass('');
    setIsAdmin(false);
    console.log(user);
  }


  return (
    <div className='ddd1'>
        <h2 className='hhh2'>Регистрация</h2>
        <input className='iii3' type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} value={username}/>
        <input className='iii3' type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
        <input className='iii3' type="text" placeholder='ConfPassword' onChange={e => setConfPass(e.target.value)} value={confPass}/>
        <Box sx={{ backgroundColor: 'rgb(57, 45, 83)', width: '100px' , display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '5px'}}>
       <Checkbox 
          checked={isAdmin}
          color="warning"
          onChange={handleChange} /> <p>Admin</p>
       </Box>
        <button className='bbb4' onClick={addUser} >Регистрация</button>
    </div>
  )
}

export default RegistrationPage