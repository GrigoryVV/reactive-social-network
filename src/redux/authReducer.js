import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthed: false
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.authUserData,
                isAuthed: action.isAuthed
            };
        default:
            return state;
    }
}

// Action creators
export const setAuthUserData = (authUserData, isAuthed) => {
    return {
        type: SET_AUTH_USER_DATA,
        authUserData,
        isAuthed
    }
}

// Thunk creators
export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.getAuthData();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data, true));
    }
}
export const loginUser = (loginData) => async (dispatch) => {
    let data = await authAPI.loginUser(loginData);

    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        dispatch(stopSubmit("login", {_error: 
            (data.messages.length > 0 ? data.messages[0] : "Some error")}));
    }
}
export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logoutUser();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null}, false));
    }
}


export default authReducer;