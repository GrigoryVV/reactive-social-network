import React from 'react';
import css from './Users.module.css';
import unknownUserPhoto from './../../img/unknownUserPhoto.png'
import { NavLink } from 'react-router-dom';

function User(props) {
    return (
        <div className="block">
            <div className={css.user_wrap}>
                <div className={css.user_avatar}>
                    <NavLink to={"/profile/" + props.user.id}>
                        <img src={props.user.photos.small !== null ? props.user.photos.small : unknownUserPhoto}
                        alt="User Avatar" />
                    </NavLink>
                </div>
                <div>
                    <div className={css.user_name + " block_name"}>
                        {props.user.name}
                    </div>
                    <div className={css.user_status}>
                        {props.user.status}
                    </div>
                    <div className={css.user_location}>
                        New York, USA
                    </div>
                </div>
                <div className={css.user_follow_btn}>
                    {
                        props.user.followed ?
                            <button disabled={props.followingInProgress.some(
                                    id => id === props.user.id
                                ) || !props.isAuthed}
                                onClick={() => {props.unfollowUser(props.user.id)}}
                            >
                                Unfollow
                            </button> :
                            <button disabled={props.followingInProgress.some(
                                    id => id === props.user.id
                                ) || !props.isAuthed}
                                onClick={() => {props.followUser(props.user.id)}}
                            >
                                Follow
                            </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;