import React from 'react';
import css from './../../Profile.module.css';

function FriendSmall(props) {
    return (
        <div className="flex_wrap">
            <div className={css.friend_avatar}>
                <img src={props.friend.avatarUrl} alt="friend"/>
            </div>
            <div className={css.friend_name}>
                {props.friend.firstName + ' ' + props.friend.lastName} 
            </div>
        </div>
    );
}

export default FriendSmall;