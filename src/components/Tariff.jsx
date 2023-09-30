import "../styles/tariff.css";

export default function Tariff(props) {

    const classCard = (isSelected ? "selected" : "");

    return (
        <div onClick={handleChange} className={`card ${classCard}`}>
            <header className={`card_header ${props.theme.card_header}`}>Безлимитный  {props.rate}</header>
            <div className={`card_price ${props.theme.card_price}`}>
                <p className="card_value">руб </p>
                <p className="card_number">{props.rate}</p>
                <p className="card_date"> /мес</p>
            </div>
            <div className="card_speed">До {props.speed} Мбит/сек </div>
            <footer className="card_footer">Объём включенного трафика не ограничен</footer>
        </div>
    );
}