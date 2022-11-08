import React, {useContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext)

const API =  "http://34.125.127.248/api/v1/accounts/"

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    // const [currentUser, setCurrentUser] = useState(false)
    const [user, setUser] = useState()
    const [error,setError] = useState()

const registerUser = async (formData) => {
    try {
      const result = await axios.post(`${API}register/`, formData);
      navigate("/activation");
    console.log(result)
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
    }
  };


  const accountConfirmation = async (value) => {
    try {
      const result = await axios(`${API}active/${value}/`);
      navigate("/login");
    console.log(result)
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
    }
  };


  const loginUser = async (formData, email) => {
    try {
      const result = await axios.post(`${API}login/`, formData);
      localStorage.setItem("token", JSON.stringify(result.data))
      localStorage.setItem("email", email)
      setUser(email)
      // setCurrentUser(email)
    //   navigate("/")
    console.log(result)
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
    }
  };


  function logout(){
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      setUser('');
      navigate('/login');
}

async function forgotPassword(formData) {
  try {
    const result = await axios.post(`${API}forgot/`, formData);
    // navigate("/activation");
  console.log(result)
  } catch (error) {
    console.log(Object.values(error.response.data).flat(2)[0]);
    console.log(error);
    setError(Object.values(error.response.data).flat(2)[0]);
  }
}

async function recoveryPassword(formData) {
  try {
    const result = await axios.post(`${API}restore/`, formData);
    // navigate("/activation");
  console.log(result)
  } catch (error) {
    console.log(Object.values(error.response.data).flat(2)[0]);
    console.log(error);
    setError(Object.values(error.response.data).flat(2)[0]);
  }
}




    
  return (
    <authContext.Provider value={{
        registerUser,
        setError,
        loginUser,
        accountConfirmation,
        forgotPassword,
        recoveryPassword,
        setUser,
        logout,

        user,
        error
      }}>
        { children }
      </authContext.Provider>
    )
}

export default AuthContextProvider