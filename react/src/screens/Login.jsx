import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../styles/style.css';
import { URL } from '../api';
import Input from '../components/Input';
import { BiChat } from 'react-icons/bi';
import Context from '../context/Context';
import Button from '../components/Button';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(Context);

  const loginUser = async (e) => {
    e.preventDefault(e);
    try {
      const req = await axios.post(`${URL}/login`, {
        username,
        password,
      }, { withCredentials: true });
      if (req.status === 200) {
        setUser(req.data.user.username);
        setUsername('');
        setPassword('');
        navigate('/product');
      }
    } catch (e) {
      console.log(e);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="login">
      <form className="login__section">
        <BiChat size={ 100 } className="login__logo" />
        <Input
          container="login__container"
          containerIcons="login__icons"
          containerInput="login__input"
          type="email"
          placeholder="USERNAME"
          icons={ <BsPerson size={ 24 } className="container__icons" /> }
          name="username"
          value={ username }
          onChange={ (e) => setUsername(e.target.value) }
        />
        <Input
          container="login__container"
          containerIcons="login__icons"
          containerInput="login__input"
          type="password"
          placeholder="PASSWORD"
          icons={ <AiOutlineLock size={ 24 } className="container__icons" /> }
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        {
          error && (
            <span className="login__error">Invalid username or password.</span>
          )
        }
        <Button
          containerBtn="login__button"
          type="button"
          text="Login"
          onClick={ (e) => loginUser(e) }
        />
      </form>
      <p>Not registered yet? <Link className="login__register" to="/register">Register now</Link></p>
    </div>
  );
}

export default Login;
