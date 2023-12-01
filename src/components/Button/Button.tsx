import './Button.css';

type Props = {
    title: string,
    style: string,
    onClick?: (e : React.MouseEvent) => void;
}

function Button({title, style, onClick} : Props) {
    return (
        <div>
            <button className={`btn ${style}`} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button