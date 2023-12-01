import { Link } from 'react-router-dom';
import { FaPaintBrush } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {

    return(
        <div className='navbar'>
            <div className='icons'></div>
            <Link to='/art' className='icons art'>
                <FaPaintBrush />
            </Link>

            
                
            
        </div>
    )
}

export default Navbar