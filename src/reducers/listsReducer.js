const initialState = [
    {  
        title: "Last Episode", 
        id: 0,
        cards: [
            {
                id: 0,
                text: "Material UI React and CSS will be used"
            },
            {
                id: 1,
                text: "Static card and list were created"
            }
        ]
    },
    {  
        title: "This Episode", 
        id: 1,
        cards: [
            {
                id: 0,
                text: "First reducer will be created"
            },
            {
                id: 1,
                text: "And render many cards on our list with static data"
            },
            {
                id: 2,
                text: "some little changes will be made which have forgotten in the last episode"
            }
        ]
    }
];

const listsReducer = (state= initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default  listsReducer;