import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Art from './pages/Art/Art';
import './App.css';

function App() {


  return (
    <Router>
      <div className='dashboard'>
        <Navbar />
        <div className='page'>
          <Routes>
            <Route path='/art' element={<Art/>}></Route>
          </Routes>
        </div>
      </div>    
    </Router>
    
  )
}

export default App
