import { Link, useLocation } from 'react-router-dom';
import { FaPaintBrush, FaHome } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    
    const url = useLocation().pathname;

    return(
        <div className='navbar'>
            <Link to='/' className={`icons ${url === "/" ? "active" : null}`}>
                <FaHome />
            </Link>
            <Link to='/art' className={`icons ${url === "/art" ? "active" : null}`}>
                <FaPaintBrush />
            </Link>

            
                
            
        </div>
    )
}

export default Navbar