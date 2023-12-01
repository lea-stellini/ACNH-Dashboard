import './Header.css';

function Header(){

    return(
        <div className='header'>
            <h1>Emeraude's Dashboard</h1>
            <div className='btn'>
                <button className='logIn'>Connexion</button>
                <button className='signIn'>Inscription</button>

                {/* <button className='logOut'>Déconnexion</button> */}
            </div>
            
        </div>
    )
}

export default Header