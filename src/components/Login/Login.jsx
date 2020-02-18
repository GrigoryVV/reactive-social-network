import React from 'react';
import { Field, reduxForm } from 'redux-form';
import css from './Login.module.css';
import { connect } from 'react-redux';
import { loginUser } from './../../redux/authReducer'
import { Redirect } from 'react-router-dom';
import { Input } from '../common/CustomFields/CustomFields';
import { required, email, maxLength } from '../../utils/validators/fieldValidators';


let maxLength20 = maxLength(20);

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={css.text_input}>
                <Field placeholder="Email"
                    component={Input}
                    type="text"
                    name="email"
                    validate={[required, email]}
                />
            </div>
            <div className={css.text_input}>
                <Field placeholder="Password"
                    type="password"
                    component={Input}
                    name="password"
                    validate={[required, maxLength20]}
                />
            </div>
            <div className={css.checkbox_input}>
                <Field type="checkbox"
                    name="rememberMe"
                    component={Input}
                />
                <span>Remember Me</span> 
            </div>
            <div className={css.checkbox_input}>
                <Field type="checkbox"
                    name="captcha"
                    component={Input}
                    validate={[required]}
                />
                <span>Captcha OK</span> 
            </div>
            { props.error &&
                <div className={css.login_error}>
                    {props.error}
                </div>
            }
            <div className={css.submit_btn}>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

LoginForm = reduxForm({form: "login"})(LoginForm);

function Login(props) {

    let handleLogin = (data) => {
        props.loginUser(data);
    }
    
    return props.isAuthed ? <Redirect to={"/profile"}/> :
    (
        <div className={css.wrap}>
            <div className="block">
                <h2 className="block_name">Please Login</h2>
                <p className={css.info}>
                    For testing purposes:<br/>
                    <b>Email: free@samuraijs.com</b><br/>
                    <b>Password: free</b>
                </p>
                <LoginForm onSubmit={handleLogin}/>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isAuthed: state.auth.isAuthed,
        userId: state.auth.id
    }
}

export default connect(mapStateToProps, { loginUser })(Login);