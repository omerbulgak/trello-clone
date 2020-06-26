import React from 'react';
import './TrelloList.css'
import TrelloCard from '../TrelloCard/TrelloCard';

const TrelloList = ({title}) => {
    return(
        <div className="container">
            <h4>{title}</h4>
            <TrelloCard />
        </div>
    )
}

export default TrelloList;