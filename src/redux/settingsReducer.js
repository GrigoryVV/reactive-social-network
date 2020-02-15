import { profileAPI } from "../api/api";

const SET_UPDATE_STATUS = 'settings/SET_UPDATE_STATUS';

let initialState = {
    updateStatus: null,
    isFetching: false
};

function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_UPDATE_STATUS:
            return {
                ...state,
                updateStatus: action.updateStatus
            };
        default:
            return state;
    }
}

// Action creators
export const showUpdateStatus = (updateStatus) => {
    return {
        type: SET_UPDATE_STATUS,
        updateStatus
    }
}

// Thunk creators
export const updateUserData = (newData) => async (dispatch) => {

    let preparedData = {
        aboutMe: newData.aboutMe,
        contacts: {
            facebook: newData.facebook,
            github: newData.github,
            instagram: newData.instagram,
            twitter: newData.twitter,
            vk: newData.vk,
            website: newData.website,
            youtube: newData.youtube
        },
        lookingForAJob: newData.lookingForAJob,
        lookingForAJobDescription: newData.lookingForAJobDescription,
        fullName: newData.fullName
    };

    let data = await profileAPI.updateUserData(preparedData)

    if (data.resultCode === 0) {
        dispatch(showUpdateStatus("Your data was successfully updated"));
    } else {
        data.messages.length > 0 &&
        dispatch(showUpdateStatus(data.messages[0]));
    }
}


export default settingsReducer;