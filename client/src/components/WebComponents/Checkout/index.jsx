import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { makeOrder } from '../../../actions'

const validate = values => {
    const errors = {}
    if (!values.contactNumber) {
        errors.contactNumber = 'Required'
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.contactNumber)) {
        errors.contactNumber = 'Invalid Contact Number'
    }
    // if (!values.shippingAddress) {
    //     errors.shippingAddress = 'Required'
    // } 
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

const renderTextArea = ({
    textarea,
    label,
    type,
    meta: { touched, error }
}) => (
        <div className="p-2">
            <label className="mb-0">{label}</label>
            <div>
                <textarea {...textarea} placeholder={label} type={type} />
                {touched && error && <div><span className="text-danger">{error}</span></div>}
            </div>
        </div>
    )


const CheckoutForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    

    const onOrder = (data, dispatch) => {
        console.log(data)
       dispatch(makeOrder(data))
    }

    return (
        <form onSubmit={handleSubmit(onOrder)} className="m-auto pt-5 pb-4">
            <Field name="contactNumber" type="text" component={renderField} label="Contact Number" />
            <Field name="billingAddress" type="text" component={renderTextArea} label="Billing Address" />
           SHIPPING DETAILS
            <Field name="shippingAddress" type="text" component={renderTextArea} label="Shipping Address" />
            <Field name="pinCode" type="text" component={renderField} label="Pin Code" /> 
            <Field name="city" type="text" component={renderField} label="City" /> 
            <Field name="state" type="text" component={renderField} label="State" /> 
            <div>
                <button type="submit" disabled={pristine || submitting} className="m-2">
                   PAY
        </button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className="m-2" >
                    Reset
        </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'CheckoutForm', // a unique identifier for this form
    validate,// <--- validation function given to redux-form
})(CheckoutForm)