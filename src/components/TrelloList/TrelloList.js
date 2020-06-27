import React from 'react';
import './TrelloList.css'
import TrelloCard from '../TrelloCard/TrelloCard';
import ActionButton from '../Button/Button';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const TrelloList = ({title, cards, listID, index}) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div className="listsContainer" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div { ...provided.droppableProps } ref={provided.innerRef} className="container">
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <h4>{title}</h4>
                                    {cards.map((card, index) => (
                                        <TrelloCard 
                                            key={card.id}
                                            index={index} 
                                            text={card.text} 
                                            id={card.id}
                                        />
                                    ))}
                                    {provided.placceholder}
                                    <ActionButton listID={listID}/>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}

export default TrelloList;