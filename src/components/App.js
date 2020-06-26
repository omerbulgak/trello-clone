import React from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux';
import ActionButton from './Button/Button'

const App = (props) => {
    const { lists } = props;
    return(
        <div className="App">
            <h2>Hello Trello</h2>
            <div style={styles.listsContainer}>
                {lists.map(list => ( 
                    <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>
                ))}
            <ActionButton list/>
            </div>
        </div>
    )
}

const styles = { 
    listsContainer: {
        display: "flex",
        flexDirection: "row"
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})
export default connect(mapStateToProps)(App);