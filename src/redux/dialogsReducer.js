const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS'

const initialState = {
    listOfDialogs: [],
};

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_DIALOGS:
            return {
                ...state,
                listOfDialogs: action.allDialogs
            };
        default:
            return state;
    }
}

export default dialogsReducer;