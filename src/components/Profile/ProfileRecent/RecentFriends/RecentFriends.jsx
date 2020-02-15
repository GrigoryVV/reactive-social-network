import React from 'react';
import css from './../../Profile.module.css';
import FriendSmall from './FriendSmall';


function RecentFriends(props) {

    let friends = props.friends.map(friend => {
        return <FriendSmall key={friend.id} friend={friend}/>;
    });

    return (
        <div className={css.friends + " block"}>
            <h2 className="block_name">
                Recent Friends
            </h2>
            {friends}
        </div>
    );
}

export default RecentFriends;