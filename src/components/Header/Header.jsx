import React from 'react';
import css from './Header.module.css';
import logo from './../../img/site_logo.jpg';
import { NavLink } from 'react-router-dom';

function Header(props) {

    return (
        <div className={css.wrap}>
            <header>
                <div className={css.fixed_header}>
                    <div className={css.nav}>
                        <NavLink to="/profile" activeClassName={css.active_link}>
                            Profile
                        </NavLink>
                        <NavLink to="/messages" activeClassName={css.active_link}>
                            Messages
                        </NavLink>
                        <NavLink to="/users" activeClassName={css.active_link}>
                            Users
                        </NavLink>
                    </div>
                    <div className={css.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    {props.isAuthed ?
                    <div className={css.logged}>
                        <div className={css.user_name}>{props.login}</div>
                        <div>
                            <button onClick={props.logoutUser}>
                                Logout
                            </button>
                        </div>
                    </div> 
                    :
                    <div className={css.login_link}>
                        <NavLink to="/login" activeClassName={css.active_link}>
                            <div className={css.login}>
                                <span>Login</span>
                                <i className="material-icons">double_arrow</i>
                            </div>
                        </NavLink>
                    </div>
                    }
                </div>
                <div className={css.cover}></div>
            </header>
        </div>
    );
}

export default Header;