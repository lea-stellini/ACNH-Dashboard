import { Link } from 'react-router-dom';
import { FaPaintBrush, FaHome } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {

    return(
        <div className='navbar'>
            <Link to='/' className='icons home'>
                <FaHome />
            </Link>
            <Link to='/art' className='icons art'>
                <FaPaintBrush />
            </Link>

            
                
            
        </div>
    )
}

export default Navbar