const namesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER_NAME":
            return [...state, action.payload];
        case "DELETE_USER_NAME":
            return state.filter(name => name !== action.payload);
        default:
            return state;
    }
};

export default namesReducer;
