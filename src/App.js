import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import Home from './Components/Navbar'
import About from './Components/Navbar'
import Landing from './Pages/Landing'
import Navbarr from './Components/Navbarr';
import Menu from './Pages/Menu';
import Navbar from './Components/Navbar';

function App() {
  return (
    <main>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='delivery' element={<delivery />} />
          
        </Routes>
        {/* <Navbarr /> */}
        {/* <Landing /> */}
        {/* <Menu /> */}
      </BrowserRouter>
    </main>
   
)
}

export default App;
