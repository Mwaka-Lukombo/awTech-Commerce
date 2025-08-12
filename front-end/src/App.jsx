
//hooks
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {Sobre} from './pages/Sobre/Sobre';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

//pages



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
