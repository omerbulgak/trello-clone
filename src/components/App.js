import React from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux';


const App = (props) => {
    const { lists } = props;
    return(
        <div className="App">
            <h2>Hello Trello</h2>
            <div style={styles.listsContainer}>
                {lists.map(list => ( <TrelloList title={list.title} cards={list.cards}/>
                ))}
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