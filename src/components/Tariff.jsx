import React, { useState } from "react";
import "../styles/tariff.css";

export default function Tariff(props, card, isSelected, setId) {

    const classCard = (isSelected ? "selected" : "");
    // const [isSelected, setIsSelected] = useState(false);

    function handleChange() {
        // setIsSelected(!isSelected);
        setId(card.id);
    }


    return (
        <div className={`card ${classCard}`} onClick={handleChange}>
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