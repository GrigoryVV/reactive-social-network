import React from 'react';
import css from '../Profile.module.css';
import Preloader from '../../common/Preloader/Preloader';
import unknownUser from './../../../img/unknownUserPhoto.png';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { NavLink } from 'react-router-dom';

function ProfileInfo(props) {
    if (!props.profileInfo) {
        return <Preloader/>
    }

    let links = [];
    let contacts = props.profileInfo.contacts;
    for (let key in contacts) {
        if (contacts[key]) {
            links.push(
                <li key={key}>
                    <div className="flex_wrap">
                        <i className="material-icons">link</i>
                        <span>{key}:</span>
                    </div>
                    <div>
                        <a className={css.word_wrap} href={contacts[key]}>
                            {contacts[key]}
                        </a>
                    </div>
                </li>
            );
        }
    }

    return (
        <div className={css.info}>
            <div className={css.avatar + " block"}>
                {props.profileInfo.photos.large ? 
                <img src={props.profileInfo.photos.large} alt="Avatar"/> :
                <img src={unknownUser} alt="Avatar"/>}
                
            </div>
            <div className={css.descr + " block"}>
                <h2 className="block_name">
                    {props.profileInfo.fullName}
                </h2>
                <div className={css.status}>
                    <ProfileStatusWithHooks 
                        status={props.status}
                        authedUserId={props.authedUserId}
                        currentUserId={props.profileInfo.userId}
                        updateUserStatus={props.updateUserStatus}
                    />
                </div>
                {props.profileInfo.aboutMe &&
                    <div className={css.facts}>
                        <h3>About me:</h3>
                        <div>{props.profileInfo.aboutMe}</div>
                    </div>
                }
                {props.profileInfo.lookingForAJob &&
                    <div className={css.facts}>
                        <h3>I'm looking for a job:</h3>
                        <div>
                            {props.profileInfo.lookingForAJobDescription}
                        </div>
                    </div>
                }
                <div className={css.facts}>
                    <ul>
                        {links}
                    </ul>
                </div>
                {
                    props.profileInfo.userId === props.authedUserId &&
                    <div className={css.settings_btn}>
                        <NavLink to="/settings">Settings</NavLink>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;