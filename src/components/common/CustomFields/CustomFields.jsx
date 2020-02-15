import React from 'react';
import css from './CustomFields.module.css'


const FormControl = ({input, meta, ...props}) => {
    return (
        <div className={css.input_control + " " + (meta.touched && meta.error ? css.error : '')}>
            <div>
                {props.children}
            </div>
            { meta.touched && meta.error &&
                <div className={css.input_info}>
                    <span>{meta.error}</span>
                </div>
            }
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}