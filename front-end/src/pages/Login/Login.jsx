import React from 'react'

export const Login = () => {
  return (
    <div className='container' style={{marginBottom:'200px',marginTop:'20px'}}>
       <form>
          <label>
             <span>E-mail:</span>
             <input type='text' placeholder='Digite o seu e-mail' />
          </label>

          <label>
            <span>Password:</span>
            <input type='password' placeholder='Digite a sua senha' />
          </label>

          <input type='submit' value='Entrar' />
       </form>
    </div>
  )
}
