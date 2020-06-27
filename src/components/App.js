import React from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux';
import ActionButton from './Button/Button'
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

import './App.css';

const App = (props) => {
    const { lists } = props;
    
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if(!destination){
            return;
        }
    }

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <h2>Hello Trello</h2>
                <div className="listsContainer">
                    {lists.map(list => ( 
                        <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>
                    ))}
                <ActionButton list/>
                </div>
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})
export default connect(mapStateToProps)(App);