
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
import { Navigate } from 'react-router-dom';
import { Novidades } from './pages/Novidades/Novidades';

//hot toaster
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { authStore } from './store/authStore';
import { useAuth } from './hooks/useAuth';
import { Produtos } from './pages/Produtos/Produtos';


function App() {
  const Auth = useAuth();

  console.log("Da pagina home:",Auth)


  return (

    <div className="App">
      <NavBar />
      <Routes>        
        <Route path='/' element={ Auth ? <Home /> : <Navigate to='/login' />  } />
        <Route path='/sobre' element={!Auth || Auth ? <Sobre /> : <Navigate to='/login' />  } />
        <Route path='/produtos' element={Auth ? <Produtos /> : <Navigate to='/login' />} />
        <Route path='/novidades' element={ Auth ? <Novidades /> : <Navigate to='/login' /> } />
        <Route path='/promocoes' element={Auth ? <Promocoes /> : <Navigate to='/login' />} />
        <Route path='/login' element={!Auth ? <Login /> : <Navigate to='/' />} />
        <Route path='/register' element={!Auth ? <Register /> : <Navigate to='/' />} />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
