import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/Navbar'
import Landing from './Pages/Landing'
import Orders from './Pages/Orders'
import Menu from './Pages/Menu'
import Navbar from './Components/Navbar'
import Offers from './Pages/Offers'
import Delivery from './Pages/Delivery';

function App() {
  return (
    <main>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='orders' element={<Orders />} />
          <Route path='about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='offers' element={<Offers />} />
          <Route path='offers/:id' element={<Offers />} />
          
        </Routes>
      </BrowserRouter>
    </main>
   
)
}

export default App;
