import React from 'react';
import css from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';


function Users(props) {
    return (
        <div className={css.wrap}>
            <div className={css.selection + " block"}>

            </div>
            <div className={css.users}>
                <Paginator totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                />
                {
                    props.users.map(user => {
                        return (
                            <User key={user.id}
                                user={user}
                                isAuthed={props.isAuthed}
                                followUser={props.followUser}
                                unfollowUser={props.unfollowUser}
                                followingInProgress={props.followingInProgress}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Users;