import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Arts.css';
import { getArts } from '../../lib/api';

type Data = {
    name: string,
    url: string,
    has_fake: boolean,
    real_info: {
        image_url: string,
    }
};

function Arts(){

    const [arts, setArts] = useState<Data[]>([]);

    useEffect(() => {
        async function getArtsList(){
            try{
                const data: Data[] = await getArts();
                setArts(data)
            } catch(error) {
                console.error('Erreur lors de la récupération des données :', error);
            }    
        }
        getArtsList();
      }, []);

    return(
        <div className='container arts'>
            <h2>Liste des oeuvres d'art</h2>
            {/* <div>Filter</div> */}
            <div className='cardList'>
                {
                    arts.map( art => {
                       return (
                       <Card 
                            key={art.name} 
                            title={art.name} 
                            img={art.real_info.image_url} 
                            hasFake={art.has_fake}
                            btn
                        />
                       )
                    })
                }
                
            </div>
        </div>
    )
}

export default Arts