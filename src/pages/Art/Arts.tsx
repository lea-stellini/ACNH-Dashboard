import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import './Arts.css';
import img from "../../assets/img.png";
import { getArts } from '../../lib/api';

function Arts(){

    useEffect(() => {
        async function getArtsList() {
          const data = await getArts();
          console.log(data)
        }
        getArtsList();
      }, []);

    return(
        <div className='arts'>
            <h1>Oeuvres d'art</h1>
            {/* <div>Filter</div> */}
            <div className='cardList'>
                <Card title="Toile Académique" img={img} />
            </div>
        </div>
    )
}

export default Arts