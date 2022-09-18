import React from 'react'

export function Login() {
  return (
    
    <div id="login">
      <h1 className="title">Login</h1>
      <p>{}</p>
      <form className="form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Digite seu Email" 
          
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Digite sua senha" 
              
          />
        </div>
        <div className="actions" id="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>

  )
}