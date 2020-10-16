import React from 'react'
import Order from './Order'
import FormSection from './Form_Components/form_section'

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
            disable={disabled}
            errors={errors}
            />
            <div className='orders-section'>
        <h2>ORDERS</h2>
        {
          orders.map(order => {
            return <Order key={order.id} details={order} />
          })
        }
      </div>
        </div>
    )
}