const personsReducer = (state =[], action) => {
    switch(action.type) {
        case 'ADD_PERSONS':
            return [...state, ...action.payload];
        default:
            return state
    }
};

export default personsReducer;