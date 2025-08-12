
//hooks
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {Sobre} from './pages/Sobre/Sobre';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

//pages



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
