import React, { useState } from 'react';

export const RegisterForm = ({getRegisterDate}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    getRegisterDate(email, pass);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPass('');
  };
  
  return (
    <div className="Form" id="reg">
      <h2 className="Form__titile">Register</h2>
      <form
        className="Form__inputs"
        onSubmit={handleSubmit}
        >
        <input
          type="text"
          value={firstName}
          className="Form__input"
          placeholder="First name"
          onChange={(event) => {
            setFirstName(event.target.value)
          }}
        />
        <input
          type="text"
          value={lastName}
          className="Form__input"
          placeholder="Last name"
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        />
        <input
          type="text"
          value={email}
          className="Form__input"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        <input
          type="password"
          value={pass}
          className="Form__input"
          placeholder="Password"
          onChange={(event) => {
            setPass(event.target.value)
          }}
        />
        <input
          type="submit"
          className="Form__button"
          value="Sing up"
        />
      </form>
      
      <a href="/" className="Form__link">Already registered?<span>Log in</span></a>
    </div>
  );
};