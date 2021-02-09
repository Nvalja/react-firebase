import React, { useState } from 'react';

export const LoginForm = ({getLoginDate}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    getLoginDate(name, password)
    setName('');
    setPassword('');
  };

  return (
    <div className="Form">
      <h2 className="Form__titile">Login</h2>
      <form
        className="Form__inputs"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          className="Form__input"
          onChange={event => {
            setName(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          className="Form__input"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" className="Form__button" value="Login" />
      </form>
      
      <a href="/" className="Form__link">Don’t have an account yet?<span>Register</span></a>
    </div>
  );
};