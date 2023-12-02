import Button from './../Button/Button';
import './Card.css';

type Props = {
    img: string;
    title: string;
    hasFake?: boolean;
    btn?: boolean;
}

function Card({img, title, hasFake, btn} : Props){
    return(
        <div className={`card ${btn ? "" : "small"}`}>
            <img src={img} alt="" className='card__img'/>
            <p className="card__title">{title} {btn ? (hasFake ? "| ⚠️" : "| ✅" ) : null}</p>
            {
                btn ? 
                <Button style="addArt" title="Ajouter au musée"/>
                :
                null
            }
        </div>
    )
}

export default Card