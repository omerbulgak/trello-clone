import React from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux';
import ActionButton from './Button/Button'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';

import './App.css';

const App = (props) => {
    const { lists } = props;
    
    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        if(!destination){
            return;
        }
        props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type
        ))
    }

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <h2>Hello Trello</h2>
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                    {provided => (
                        <div className="listsContainer" {...provided.droppableProps} ref={provided.innerRef}>
                            {lists.map((list, index) => ( 
                                <TrelloList 
                                    listID={list.id} 
                                    key={list.id} 
                                    title={list.title} 
                                    cards={list.cards}
                                    index= {index}
                                />
                            ))}
                            {provided.placeholder}
                            <ActionButton list/>
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})
export default connect(mapStateToProps)(App);