import Button from './../Button/Button';
import './Card.css';

type Props = {
    img: string;
    title: string;
    hasFake: boolean;
}

function Card({img, title, hasFake} : Props){
    return(
        <div className='card'>
            <img src={img} alt="" className='card__img'/>
            <p className='card__title'>{title} | {hasFake ? " ⚠️" : " ✅"}</p>
            <Button style="addArt" title="Ajouter au musée"/>
        </div>
    )
}

export default Card