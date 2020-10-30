import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {login} from './../../../actions'
import { Link } from 'react-router-dom'


const validate = values => {
    const errors = {}
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}



const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => (
        <div className="p-2">
            <label className="mb-0">{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <div><span className="text-danger">{error}</span></div>}
            </div>
        </div>
    )

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    const onLogin =( data,dispatch )=> {
        dispatch(login(data))
    } 
    
    return (
        <form onSubmit={handleSubmit(onLogin)} className="m-auto pt-5 pb-4">
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
             <div>
                <button type="submit" disabled={pristine || submitting} className="m-2">
                    Login
        </button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className="m-2">
                    Reset
        </button>
            </div>
            New User<Link to="/register">Register</Link>
        </form>
    )
}

export default reduxForm({
    form: 'loginform', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(LoginForm)