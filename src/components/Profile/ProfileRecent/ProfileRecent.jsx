import React from 'react';
import css from './../Profile.module.css';
import RecentFriendsContainer from './RecentFriends/RecentFriendsContainer';

function ProfileRecent() {
    return (
        <div className={css.recent}>
            <RecentFriendsContainer/>
        </div>
    );
}

export default ProfileRecent;