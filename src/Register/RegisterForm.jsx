import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../style/Form.scss';

export const RegisterForm = ({ getRegisterDate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mailError, setMailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName
        && lastName
        && email
        && pass.length >= 6
        && email.includes('@')
        && pass.match(/[a-zа-я]/i)
    ) {
      getRegisterDate(email, pass, firstName, lastName);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPass('');
      setMailError(false);
      setPasswordError(false);
      setFirstNameError(false);
      setLastNameError(false);
    }

    if (pass.length < 6 || !pass.match(/[a-zа-я]/i)) {
      setPasswordError(true);
    }

    if (!firstName) {
      setFirstNameError(true);
    }

    if (!lastName) {
      setLastNameError(true);
    }

    if (!email || !email.includes('@')) {
      setMailError(true);
    }
  };
  
  return (
    <div className="wrapper">
      <div className="Form" id="reg">
        <h2 className="Form__title Form__title--register">Register</h2>
        <form
          className="Form__inputs"
          onSubmit={handleSubmit}
        >
          {firstNameError
            && <p className="Form__errorInfo"> Please enter your name </p>
          }
          <input
            type="text"
            value={firstName}
            className={classNames({
              'Form__input--register': true,
              Form__input: true,
              'Form__input--isError': firstNameError,
            })}
            placeholder="First name"
            onChange={(event) => {
              setFirstName(event.target.value);
              setFirstNameError(false);
            }}
          />
          {lastNameError
            && <p className="Form__errorInfo"> Please enter your surname </p>
          }
          <input
            type="text"
            value={lastName}
            className={classNames({
              'Form__input--register': true,
              Form__input: true,
              'Form__input--isError': lastNameError,
            })}
            placeholder="Last name"
            onChange={(event) => {
              setLastName(event.target.value);
              setLastNameError(false);
            }}
          />
          {mailError
            && <p className="Form__errorInfo"> Enter email to login </p>
          }
          <input
            type="text"
            value={email}
            className={classNames({
              'Form__input--register': true,
              Form__input: true,
              'Form__input--isError': mailError,
            })}
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
              setMailError(false);
            }}
          />
          {passwordError
            && <p className="Form__errorInfo"> Enter password to login </p>
          }
          <input
            type="password"
            value={pass}
            className={classNames({
              'Form__input--regLast': true,
              Form__input: true,
              'Form__input--isError': passwordError,
            })}
            placeholder="Password"
            onChange={(event) => {
              setPass(event.target.value);
              setPasswordError(false);
            }}
          />
          {passwordError
            && (
            <p style={{ whiteSpace: 'nowrap' }}>
              at least 6 with numbers and letters
            </p>
            )
          }
          <input
            type="submit"
            className="Form__button Form__button--register"
            value="Sing up"
          />
        </form>
        <a href="login" className="Form__link Form__link--register">
          Already registered?
          <span className="Form__link--black"> Log in</span>
        </a>
      </div>
    </div>

  );
};

RegisterForm.propTypes = {
  getRegisterDate: PropTypes.func.isRequired,
};
