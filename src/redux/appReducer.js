import { getAuthUserData } from "./authReducer";

const APP_INITIALIZATION = 'app/APP_INITIALIZATION';

let initialState = {
    initialized: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case APP_INITIALIZATION:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

// Action creators
export const appInitializationSucceed = () => {
    return {
        type: APP_INITIALIZATION
    }
}

// Thunk creators
export const initializeApp = () => (dispatch) => {
    Promise.all([
        dispatch(getAuthUserData())
    ]).then(() => {
        dispatch(appInitializationSucceed());
    });
}

export default appReducer;