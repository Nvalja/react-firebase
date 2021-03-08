import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../style/Form.scss';

export const LoginForm = ({ getLoginDate, onLink }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [mailError, setMailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail && password) {
      getLoginDate(mail, password);
      setMail('');
      setPassword('');
      setMailError(false);
      setPasswordError(false);
    }

    if (!mail) {
      setMailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }
  };

  return (
    <div className="wrapper" id="login">
      <div className="Form">
        <h2 className="Form__title">Login</h2>
        <form
          className="Form__inputs"
          onSubmit={handleSubmit}
        >
          {mailError && <p className="Form__errorInfo"> Wrong Email </p>}
          <input
            type="text"
            value={mail}
            className={classNames({
              Form__input: true,
              'Form__input--isError': mailError,
            })}
            placeholder="Email"
            onChange={(event) => {
              setMail(event.target.value);
              setMailError(false);
            }}
          />
          {passwordError && <p className="Form__errorInfo"> Wrong Password </p>}
          <input
            type="password"
            value={password}
            className={classNames({
              Form__input: true,
              'Form__input--isError': passwordError,
            })}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordError(false);
            }}
          />
          <input type="submit" className="Form__button" value="Login" />
        </form>
      
        <button
          type="button"
          className="Form__link"
          onClick={onLink}
        >
          Don’t have an account yet?
          <span className="Form__link--black"> Register</span>
        </button>
      </div>
    </div>
  );
};

LoginForm.propTyes = {
  getLoginDate: PropTypes.func.isRequired,
  onLink: PropTypes.func.isRequired,
};
