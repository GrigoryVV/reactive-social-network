import React from 'react';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileRecent from './ProfileRecent/ProfileRecent';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

function Profile(props) {
    return (
        <div className={css.wrap}>
            <ProfileInfo 
                profileInfo={props.profileInfo}
                status={props.status}
                authedUserId={props.authedUserId}
                updateUserStatus={props.updateUserStatus}
            />
            <ProfilePostsContainer/>
            <ProfileRecent/>
        </div>
    )
}

export default Profile;