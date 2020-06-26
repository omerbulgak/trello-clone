import React from 'react';
import './TrelloList.css'
import TrelloCard from '../TrelloCard/TrelloCard';
import ActionButton from '../Button/Button';

const TrelloList = ({title, cards}) => {
    return(
        <div className="container">
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard key={card.id} text={card.text}/>
            ))}
            <ActionButton />
        </div>
    )
}

export default TrelloList;