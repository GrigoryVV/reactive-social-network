import React from 'react';
import css from './Settings.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../common/CustomFields/CustomFields';
import { required, maxLength, minLength } from '../../utils/validators/fieldValidators';

const maxLength30 = maxLength(30);
const maxLength300 = maxLength(300);
const maxLength100 = maxLength(100);
const minLength2 = minLength(2);

let SettingsForm = (props) => {
    return (
        <form className={css.form_layout} onSubmit={props.handleSubmit}>
            <div className={css.form_section}>
                <h3 className={css.form_section_name}>Information</h3>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Full Name:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="fullName"
                            className={css.text_input}
                            validate={[required, maxLength30, minLength2]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        About me:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Textarea}
                            name="aboutMe"
                            className={css.text_input}
                            validate={[required, maxLength300]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        I am looking for a job:
                    </span>
                    <div className={css.field}>
                        <Field type="checkbox"
                            component="input"
                            name="lookingForAJob"
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        A perfect job for me:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Textarea}
                            name="lookingForAJobDescription"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className={css.submit_btn}>
                    <button type="submit">Submit all</button>
                </div>
            </div>
            <div className={css.form_section}>
                <h3 className={css.form_section_name}>Contacts</h3>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Facebook page:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="facebook"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Vk page:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="vk"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Twitter page:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="twitter"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Instagram account:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="instagram"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Youtube channel:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="youtube"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Github page:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="github"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
                <div className="flex_wrap">
                    <span className={css.field_label}>
                        Website:
                    </span>
                    <div className={css.field}>
                        <Field type="text"
                            component={Input}
                            name="website"
                            className={css.text_input}
                            validate={[maxLength100]}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

SettingsForm = reduxForm({ form: "settings" })(SettingsForm);

const Settings = (props) => {
    let handleSettingsUpdate = (data) => {
        props.updateUserData(data);
    }

    return (
        <div className={css.wrap}>
            <div className="block">
                <h2 className="block_name">Settings</h2>
                {props.updateStatus &&
                    <div className={css.information}>
                        {props.updateStatus}
                    </div>
                }
                <SettingsForm profileInfo={props.profileInfo}
                    onSubmit={handleSettingsUpdate}
                />
            </div>
        </div>
    );
};

export default Settings;