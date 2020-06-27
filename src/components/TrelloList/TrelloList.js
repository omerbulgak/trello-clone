import React from 'react';
import './TrelloList.css'
import TrelloCard from '../TrelloCard/TrelloCard';
import ActionButton from '../Button/Button';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({title, cards, listID}) => {
    return(
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div { ...provided.droppableProps } ref={provided.innerRef} className="container">
                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <TrelloCard 
                            key={card.id}
                            index={index} 
                            text={card.text} 
                            id={card.id}
                        />
                    ))}
                    <ActionButton listID={listID}/>
                    {provided.placceholder}
                </div>
            )}
        </Droppable>
    )
}

export default TrelloList;