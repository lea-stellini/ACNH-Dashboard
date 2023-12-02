import Button from '../Button/Button';
import './Header.css';

function Header(){

    return(
        <div className='header'>
            <h1>Emeraude Dashboard</h1>
            <div className='buttons'>
                <Button style="logIn" title="Connexion"/>
                <Button style="singIn" title="Inscription"/>
                {/* <Button style="logOut" title="Desinscription"/> */}
            </div>
            
        </div>
    )
}

export default Header