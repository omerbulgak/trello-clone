import {CONSTANTS} from '../actions';
let listID = 2;
let cardID = 3;

const initialState = [
    {  
        title: "Last Episode", 
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Material UI React and CSS will be used"
            },
            {
                id: `card-${1}`,
                text: "Static card and list were created"
            }
        ]
    },
    {  
        title: "This Episode", 
        id: `list-${1}`,
        cards: [
            {
                id: `card-${0}`,
                text: "First reducer will be created"
            },
            {
                id: `card-${1}`,
                text: "And render many cards on our list with static data"
            },
            {
                id: `card-${2}`,
                text: "some little changes will be made which have forgotten in the last episode"
            }
        ]
    }
];

const listsReducer = (state= initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
               title: action.payload,
               cards: [],
               id: `list-${listID}`
            }
            listID += 1;
        return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return{
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }else{
                    return list;
                }
            })
            return newState;
        }
        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } = action.payload;
            const newState = [...state]

            // dragging list around

            if(type === "list"){
                const list = newState.splice(droppableIndexStart, 1)
                newState.splice(droppableIndexEnd, 0, ...list)
                return newState;
            }

            // dnd in the same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            // dnd between lists
            if(droppableIdStart !== droppableIdEnd){
                // find the list where drag happened
                const listStart = state.find(list => droppableIdStart === list.id)
                
                // pull out the card from this list
                const card = listStart.cards.splice(droppableIndexStart, 1)

                // find the list where drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id)

                // put the card in the new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;
        default:
            return state;
    }
};

export default  listsReducer;