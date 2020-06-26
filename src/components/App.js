import React from 'react';
import TrelloList from './TrelloList/TrelloList';

const App = () => {
    return(
        <div className="App">
            <h2>Hello Trello</h2>
            <TrelloList title="test"/>
        </div>
    )
}
export default App;