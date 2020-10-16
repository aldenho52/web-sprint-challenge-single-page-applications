import React from 'react'
import {Link} from 'react-router-dom'

export default function Form (props) {
    const {values, change, submit, disabled, errors} = props
    
    const onChange = (evt) => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, type, checked } = evt.target;

        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      };

      const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };

    return (
        <div className='form'>
            <h2>Build Your Own Pizza</h2>
            <img src='https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt='pizza bread' />
            <form  className='pizza-form' onSubmit={onSubmit} >
                <label>Name
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Pizza Size
                    <select onChange={onChange} value={values.size} name='size'>
                        <option value=''>-Select Pizza Size-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <div className='checkboxes'>
                    <h2>Toppings</h2>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Steak
                        <input
                            type='checkbox'
                            name='steak'
                            checked={values.steak}
                            onChange={onChange}
                        />
                    </label>
                    <label>Chicken
                        <input 
                            type='checkbox'
                            name='chicken'
                            checked={values.chicken}
                            onChange={onChange}
                        />
                    </label>
                    <label>Olives
                        <input 
                            type='checkbox'
                            name='olives'
                            checked={values.olives}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <label>Special Instructions
                    <input type='text' value={values.instructions} name='instructions' onChange={onChange} placeholder="Enter any additional instructions or comments here" />
                </label>
                <Link to='/confirmation'>

                </Link>
                <button disabled={disabled}>Submit</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </form>
        </div>
    )
}