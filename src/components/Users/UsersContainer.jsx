import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import {
    followUser,
    unfollowUser,
    setCurrentPage,
    getUsers
} from "../../redux/usersReducer";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getUsersFromState, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress,  } from '../../utils/selectors/userSelectors';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                followingInProgress={this.props.followingInProgress}
                isAuthed={this.props.isAuthed}
            />
        </>
    }
}

function mapStateToProps(state) {
    return {
        users: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuthed: state.auth.isAuthed
    }
}

export default compose(
    connect(
        mapStateToProps, 
        {
            followUser,
            unfollowUser,
            setCurrentPage,
            getUsers
        }
    )
)(UsersContainer);