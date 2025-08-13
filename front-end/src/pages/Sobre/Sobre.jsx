//css
import './Sobre.css';

//imgage
import awTech from '../../assempts/awTech.png';


export const Sobre = () => {
  return (
    <>
    <h3 className="title">Sobre</h3>
    <div className='row-container'>
      <div className='row-left'>
        <img className='image' src={awTech} alt='logo tipo awTech' />
      </div>

      <div className='row-right ' id='sobre'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima tempore dolor 
          mollitia sunt. Laudantium, quis aliquid 
          magnam beatae dolore laboriosam nulla minima labore quas ut, facilis adipisci ex sint
          adipisicing elit. Laboriosam minima tempore dolor 
          mollitia sunt. Laudantium, quis aliquid 
          magnam beatae dolore laboriosam nulla minima labore quas ut, facilis adipisci ex sint
          adipisicing elit. Laboriosam minima tempore dolor 
          mollitia sunt. Laudantium, quis aliquid 
          magnam beatae dolore laboriosam nulla minima labore quas ut, facilis adipisci ex sint
          adipisicing elit. Laboriosam minima tempore dolor 
          mollitia sunt. Laudantium, quis aliquid 
          magnam beatae dolore laboriosam nulla minima labore quas ut, facilis adipisci ex sint.</p>

          <form>
            <label>
               <span>E-mail:</span>
                <input type='text' placeholder='Insira o seu e-mail' />
            </label>

            <input type='submit' value='Enviar' />
          </form>
      </div>
    </div>
    </>
  )
}
