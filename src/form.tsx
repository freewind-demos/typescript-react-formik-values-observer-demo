//import * as React from 'react'
import React, {useState, FormEvent} from 'react'

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Login with: ", username, password)
  }

  return <div>
    <h1>Hello React Form</h1>
    <form onSubmit={onSubmit}>
      <div>
        <label>Username:
          <input type='text' name='username' value={username}
                 onChange={event => setUsername(event.target.value)}/>
        </label>
      </div>
      <div>
        <label>Password:
          <input type='password' name='password' value={password}
                 onChange={event => setPassword(event.target.value)}/>
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
};
