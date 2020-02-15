import React from 'react';
import css from './../../Profile.module.css';

const Post = React.memo((props) => {
    return (
        <div className={css.post  + " block"}>
            <div className={css.post_author}>
                {props.author}
            </div>
            <div className={css.post_message}>
                {props.message}
            </div>
            <div className={css.post_actions}>
                <button className={css.like_btn}>
                    <i className="material-icons">thumb_up_alt</i>
                </button>
                <span className={css.like_count}>
                    {props.likes} people like this
                </span>
            </div>
        </div>
    );
});

export default Post;