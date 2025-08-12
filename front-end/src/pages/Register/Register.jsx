

export const Register = () => {
  return (
    <div className="container">
      <form>
         <label>
            <span>Nome:</span>
            <input type="text" placeholder="Insira o seu nome" />
         </label>

         <label>
            <span>E-mail:</span>
            <input type="text" placeholder="Insira o seu email" />
         </label>

         <label>
            <span>Password:</span>
            <input type="password" placeholder="Password" />
         </label>

        <label>
            <span>Confirme a password:</span>
            <input type="password" placeholder="Password" />
         </label>

         <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}
