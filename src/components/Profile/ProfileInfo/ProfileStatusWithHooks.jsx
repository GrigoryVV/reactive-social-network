import React, { useState, useEffect } from 'react';
import css from '../Profile.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    function activateEditMode() {
        setEditMode(true);
    }
    function deactivateEditMode() {
        setEditMode(false);
        props.updateUserStatus(status)
    }
    function handleStatusChange(e) {
        setStatus(e.currentTarget.value);
    }
    
    let isMyProfile = props.currentUserId === props.authedUserId;

    return (
        <div>
            {
            !editMode 
            ? <div>
                <span onDoubleClick={isMyProfile && activateEditMode}>
                    {
                        isMyProfile 
                        ? props.status || "Here can be your status"
                        : props.status
                    }
                </span>
            </div>
            : <div className={css.status_input}>
                <input type="text"
                    autoFocus
                    onBlur={deactivateEditMode}
                    onChange={handleStatusChange}
                    value={status}
                />
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;