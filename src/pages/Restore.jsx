import { NavigateBefore } from "@mui/icons-material";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Restore = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { forgotPassword, recoveryPassword } = useAuth();
  const navigate = useNavigate()

  function sendEmail() {
    let formData = new FormData();
    formData.append("serializer", email);

    forgotPassword(formData);
  }

  function recovery() {
    let formData = new FormData();
    formData.append("code", code);
    formData.append("password", password);
    formData.append("password2", password2);

    recoveryPassword(formData)
  }

  return (
    <div className='containerLogin'>
    <div className='ddd1'>
    <h2 className='hhh2'>Востановть</h2>
      <input
        className='iii3'
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button className='bbb4' onClick={sendEmail}>Отправить</button>
      <br />
      <h2 className='hhh2'>Новое</h2>
      <input
      className='iii3'
      placeholder="Активация кода"
        type="text"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      <input
      className='iii3'
      placeholder="Новый пароль"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
      className='iii3'
      placeholder="Подтвердить пароль"
        type="password"
        onChange={(e) => setPassword2(e.target.value)}
        value={password2}
      />

      <button className='bbb4' onClick={recovery}>Восстановить</button>

      <button className="bbb5" onClick={() => navigate('/login')}>Назад</button>
    </div>
    </div>
  );
};

export default Restore;
