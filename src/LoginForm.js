import React from 'react';

function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;