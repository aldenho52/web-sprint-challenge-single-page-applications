import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import schema from './formSchema'


import Home from './Home'
import Form from './Form'
import Confirmation from './Confirmation'
import Order from './Order'

const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    steak: false,
    chicken: false,
    olives: false,
    instructions: ''
  }
const initialFormErrors = {
    name: '',
    size: '',
  }

const initialOrders = []
const initialDisabled = true

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = (newOrder) => {
    axios
      .post('http://localhost:3000/pizza', newOrder)
      .then(res => {
        console.log(res)
        console.log('Order submitted!')
        setOrders([res.data, ...orders])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
        console.log('Order failed to submit.')
      })
  }

const change = (name, value) => {
  //enter yup schema here

  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    });
  });

setFormValues({
  ...formValues,
  [name]: value,
});
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size,
    toppings: ['pepperoni', 'steak', 'chicken', 'olives'].filter(
      (hobby) => formValues[hobby]
    ),
    instructions: formValues.instructions.trim(),
  }
  postNewOrder(newOrder)
}

// adjust disabled button every time form values changes.
useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);


  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Form</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/pizza' >
          <Form 
            values={formValues}
            change={change}
            submit={formSubmit}
            disable={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
      {
        orders.map(order => {
          return <Order key={order.id} details={order} />
        })
      }
    </div>
  );
};
export default App;
