
//pages
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {Sobre} from './pages/Sobre/Sobre';
import { Promocoes } from './pages/Promocoes/Promocoes';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

//hooks
import { useAuth } from './hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Novidades } from './pages/Novidades/Novidades';



function App() {
 
  const {Auth} = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre /> } />
        <Route path='/novidades' element={<Novidades />} />
        <Route path='/promocoes' element={<Promocoes />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
