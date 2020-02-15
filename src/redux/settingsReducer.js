import { profileAPI } from "../api/api";
import { getProfileInfo } from "./profileReducer";

const SET_UPDATE_STATUS = 'settings/SET_UPDATE_STATUS';
const SETTINGS_INITIALIZATION = 'settings/SETTINGS_INITIALIZATION';

let initialState = {
    updateStatus: null,
    isInitialized: false
};

function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_UPDATE_STATUS:
            return {
                ...state,
                updateStatus: action.updateStatus
            };
        case SETTINGS_INITIALIZATION:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
}

// Action creators
const showUpdateStatus = (updateStatus) => {
    return {
        type: SET_UPDATE_STATUS,
        updateStatus
    }
}
const settingsInitSuccess = () => {
    return {
        type: SETTINGS_INITIALIZATION
    }
}

// Thunk creators
export const updateUserData = (newUserData) => async (dispatch) => {

    let data = await profileAPI.updateUserData(newUserData)

    if (data.resultCode === 0) {
        dispatch(showUpdateStatus("Your data was successfully updated"));
    } else {
        data.messages.length > 0 &&
        dispatch(showUpdateStatus(data.messages[0]));
    }
}
export const initializeSettings = () => async (dispatch, getState) => {
    const authedId = getState().auth.id;

    await dispatch(getProfileInfo(authedId));

    dispatch(settingsInitSuccess());
}


export default settingsReducer;