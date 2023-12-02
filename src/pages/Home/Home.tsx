import './Home.css';
import Card from '../../components/Card/Card';
import { getMuseum } from '../../lib/api';
import { useEffect, useState } from 'react';

type Art = {
    name: string,
    imgUrl: string,
};

function Home(){

    const [arts, setArts] = useState<Art[]>([]);

    useEffect(() => {
        async function getMuseumList(){
            try{
                const data: Art[] = await getMuseum();
                setArts(data)
            } catch(error) {
                console.error('Erreur lors de la récupération des données :', error);
            }    
        }
        getMuseumList();
      }, []);

    return(
        <div className='container'>
            <div className='museum'>
                <h2>Mon musée</h2>
                <div className='museumList'>
                {   
                    arts.map( art => {
                       return (
                       <Card 
                            key={art.name} 
                            title={art.name} 
                            img={art.imgUrl} 
                        />
                       )
                    })
                    
                }
                </div>
            </div>
        </div>
    )
}

export default Home