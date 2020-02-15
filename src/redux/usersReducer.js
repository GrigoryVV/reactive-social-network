import { usersAPI, followAPI } from "../api/api";

const FOLLOW_USER = 'users/FOLLOW_USER';
const UNFOLLOW_USER = 'users/UNFOLLOW_USER';
const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId 
                        ? {...user, followed: true}
                        : user;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId
                        ? {...user, followed: false}
                        : user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

// Action creators
export const followUserAccept = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}
export const unfollowUserAccept = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}
export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

// Thunk creators
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}
export const unfollowUser = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await followAPI.unfollowUser(userId)

    if (data.resultCode === 0) {
        dispatch(unfollowUserAccept(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const followUser = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await followAPI.followUser(userId)

    if (data.resultCode === 0) {
        dispatch(followUserAccept(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}


export default usersReducer;