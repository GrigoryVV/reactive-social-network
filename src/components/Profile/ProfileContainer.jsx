import React from 'react';
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileInfo, getUserStatus, updateUserStatus, updateUserPhoto } from './../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authedUserID;
        }
        
        this.props.getProfileInfo(userId);
        this.props.getUserStatus(userId);
    }
    
    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        profileInfo: state.profileSection.profileInfo,
        authedUserId: state.auth.id,
        status: state.profileSection.status
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getProfileInfo, getUserStatus, updateUserStatus, updateUserPhoto
        }
    ),
    withRouter,
)(ProfileContainer);