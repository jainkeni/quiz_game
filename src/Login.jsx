import React, { useState } from 'react';


function Login() {
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
function handleSubmit(event){
    event.preventDefault();

}

  return (
    <div className='container'>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' onChange={e=> setEmail(e.target.value)}>
                </input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' onChange={e=> setPassword(e.target.value)}></input>
            </div>
            <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
