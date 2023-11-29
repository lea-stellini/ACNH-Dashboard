import './Card.css';

type Props = {
    img: string;
    title: string;
}

function Card({img, title} : Props){
    return(
        <div className='card'>
            <img src={img} alt="" className='card__img'/>
            <h2 className='card__title'>{title}</h2>
            <div className='card__check'>
                <label className='card__label'> Au musée : </label>
                <input type='checkbox' className='card__input'/>
            </div>
        </div>
    )
}

export default Card