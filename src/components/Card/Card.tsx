import { postInMuseum } from '../../lib/api';
import Button from './../Button/Button';
import './Card.css';

type Card = {
    img: string;
    title: string;
    hasFake?: boolean;
    btn?: boolean;
}

type Data = {
    name: string,
    imgUrl: string,
}

function Card({img, title, hasFake, btn} : Card){

    const addInMuseum = () => {
        const data : Data = {
            name: title,
            imgUrl: img
        }

        postInMuseum(data)
    }

    return(
        <div className={`card ${btn ? "" : "small"}`}>
            <img src={img} alt="" className='card__img'/>
            <p className="card__title">{title} {btn ? (hasFake ? "| ⚠️" : "| ✅" ) : null}</p>
            {
                btn ? 
                <Button style="addArt" title="Ajouter au musée" onClick={addInMuseum}/>
                :
                null
            }
        </div>
    )
}

export default Card