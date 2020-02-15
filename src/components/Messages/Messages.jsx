import React from 'react';
import css from './Messages.module.css';

const Messages = React.memo((props) => {
    return (
        <div>
            <h2 className={css.info}>Here will be dialogs with users</h2>
        </div>
    );
});

export default Messages;