import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from "react-datepicker";
import moment from "moment";
import { register } from '../../../actions'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.contactNumber) {
        errors.contactNumber = 'Required'
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.contactNumber)) {
        errors.contactNumber = 'Invalid Contact Number'
    } 
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    } 
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Required'
    } else if (values.confirmpassword !== values.password) {
        errors.confirmpassword = 'Must be same with Password'
    }
   
    return errors
}

const FieldDatePicker = ({ input, placeholder, label }) => (
    <div className="p-2">
    <label className="mb-0">{label}</label>
    <div><DatePicker
        className="plus-icon"
        dateFormat="dd/MM/yyyy"
        selected={input.value || null}
        onChange={input.onChange}
        maxDate={new Date()}
        disabledKeyboardNavigation
        placeholderText={placeholder}
        /></div>
    </div>
);

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


const SignupForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    const onSignup = (data, dispatch) => {
        delete data['confirmpassword']
        dispatch(register({...data,dob:moment(data.dob).format('YYYY-MM-DD'), userType:2}))
    }

    return (
        <form onSubmit={handleSubmit(onSignup)} className="m-auto pt-5 pb-4">
            <Field
                name="name"
                type="text"
                component={renderField}
                label="Name"
            />
            <Field
                component={FieldDatePicker}
                name="dob"
                placeholder="DD/MM/YYYY"
                label="Date of Birth"
            />
            <Field name="age" type="number" component={renderField} label="Age" />
            <Field name="contactNumber" type="text" component={renderField} label="Contact Number" />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            <Field
                name="confirmpassword"
                type="password"
                component={renderField}
                label="Confirm password"
            />
            <div>
                <button type="submit" disabled={pristine ||submitting} className="m-2">
                    Sign Up
        </button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className="m-2" >
                    Reset
        </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'signupform', // a unique identifier for this form
    validate,// <--- validation function given to redux-form
 })(SignupForm)