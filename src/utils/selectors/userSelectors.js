export function getUsersFromState(state) {
    return state.usersSection.users;
}
export function getPageSize(state) {
    return state.usersSection.pageSize;
}
export function getTotalUsersCount(state) {
    return state.usersSection.totalUsersCount;
}
export function getCurrentPage(state) {
    return state.usersSection.currentPage;
}
export function getIsFetching(state) {
    return state.usersSection.isFetching;
}
export function getFollowingInProgress(state) {
    return state.usersSection.followingInProgress;
}