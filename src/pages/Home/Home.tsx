import './Home.css';
import Card from '../../components/Card/Card';
import img from '../../assets/img.png';

function Home(){
    return(
        <div className='container'>
            <div className='museum'>
                <h2>Mon musée</h2>
                <div className='museumList'>
                    <Card title="Title" img={img}/>
                </div>
            </div>
        </div>
    )
}

export default Home