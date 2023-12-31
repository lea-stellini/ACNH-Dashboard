import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';       
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Arts from './pages/Art/Arts';
import './App.css';

function App() {


  return (
    <Router>
      <div className='dashboard'>
        <Navbar />
        <div className='layout'>
          <Header />
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/art' element={<Arts/>}></Route>
            </Routes>
        </div>   
      </div>    
    </Router>
  )
}

export default App
