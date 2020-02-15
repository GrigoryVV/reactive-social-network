import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

let initialState = {
    posts: [
        {
            id: 0,
            author: 'John Doe',
            message: 'This functionality will be updated in the future',
            likes: 0
        },
        {
            id: 1,
            author: 'John Doe',
            message: 'For now this is just imitation of future behaviour',
            likes: 3
        },
    ],
    friends: [
        {
            id: 0,
            firstName: 'Kate',
            lastName: 'Lee',
            avatarUrl: 'https://static.thenounproject.com/png/15724-200.png'
        },
        {
            id: 1,
            firstName: 'Steve',
            lastName: 'Jobs',
            avatarUrl: 'https://static.thenounproject.com/png/15724-200.png'
        },
        {
            id: 2,
            firstName: 'Bill',
            lastName: 'Gates',
            avatarUrl: 'https://static.thenounproject.com/png/15724-200.png'
        },
        {
            id: 3,
            firstName: 'John',
            lastName: 'Lenon',
            avatarUrl: 'https://static.thenounproject.com/png/15724-200.png'
        },
        {
            id: 4,
            firstName: 'Angela',
            lastName: 'Merkel',
            avatarUrl: 'https://static.thenounproject.com/png/15724-200.png'
        }
    ],
    profileInfo: null,
    status: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let lastId = state.posts[state.posts.length - 1].id
            return !action.newPostText ? state : {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: lastId + 1,
                        author: action.author,
                        message: action.newPostText,
                        likes: 0
                    }
                ],
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.userStatus
            };
        default:
            return state;
    }
}

// Action creators
export const addPost = (newPostText, author) => {
    return {
        type: ADD_POST,
        newPostText,
        author
    }
}

export const setProfileInfo = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO,
        profileInfo
    }
}
export const setUserStatus = (userStatus) => {
    return {
        type: SET_USER_STATUS,
        userStatus
    }
}

// Thunk creators
export const getProfileInfo = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserData(userId);

    dispatch(setProfileInfo(data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);

    dispatch(setUserStatus(data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}


export default profileReducer;