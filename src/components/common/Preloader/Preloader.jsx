import React from 'react';
import css from './Preloader.module.css';
import preloader from './../../../img/_preloader.gif';

function Preloader(props) {
    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <img src={preloader} alt="loading"/> 
            </div>
        </div>
    );
}

export default Preloader;