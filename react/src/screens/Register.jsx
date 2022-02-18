import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import { BiChat } from 'react-icons/bi';
import { URL } from '../api';
import Button from '../components/Button';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault(e);
    try {
      await axios.post(`${URL}/register`, {
        username,
        password,
      });
      setUsername('');
      setPassword('');
      navigate('/');
    } catch (e) {
      if (e) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  } 

  return (
    <div className="login">
      <form className="login__section">
        <BiChat size={ 100 } className="login__logo" />
        <Input
          container="login__container"
          containerIcons="login__icons"
          containerInput="login__input"
          type="text"
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
            <span className="login__error">Username already registered.</span>
          )
        }
        <Button
          containerBtn="login__button"
          type="button"
          text="Register"
          onClick={ (e) => registerUser(e) }
        />
      </form>
      <p>Already registered? <Link className="login__register" to="/">Log-in</Link></p>
    </div>
  );
}

export default Register;
