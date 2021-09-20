import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ user, login, signup }) => {

  const [inNotUp, setInNotUp] = React.useState(true);

  const toggleInNotUp = e => {
    e.preventDefault();
    setInNotUp(!inNotUp);
  };

  const handleSubmit = e => {
    e.preventDefault();

    (inNotUp ? login : signup)({
      username: e.target.username.value,
      password: e.target.password.value
    });
  };

  return <div className="Login">
    {user 
      ? <button onClick={() => login(null)}>sign out</button>
      : <form onSubmit={handleSubmit}>

        <input name="username" type="text" placeholder="username"/>
        <input name="password" type="password" placeholder="password"/>
        <span></span>
        <button 
          type="submit"
          onSubmit={handleSubmit}
        >
          sign {inNotUp ? 'in' : 'up'}
        </button>
        <span onClick={toggleInNotUp}>
          {inNotUp ? 'Need an account?' : 'Already have an account?'}
        </span>
      </form>
    }
  </div>;
};

Login.propTypes = {
  user: PropTypes.string,
  login: PropTypes.func,
  signup: PropTypes.func
};

export default Login;
