import React from 'react'
import FormSection from './Form_Components/form_section'
import Confirmation from './Confirmation'
import { Route, Switch } from 'react-router-dom'

export default function Form (props) {
    const {values, change, submit, disabled, errors, orders} = props

    return (
        <div className='form'>
            <h2>Build Your Own Pizza</h2>
            <img src='https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt='pizza bread' />
            <FormSection 
            values={values}
            change={change}
            submit={submit}
            disabled={disabled}
            errors={errors}
            />
            <Confirmation orders={orders} />
        </div>

    )
}