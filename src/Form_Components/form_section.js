import React from 'react'
import {Link} from 'react-router-dom'

export default function FormSection (props) {
    const {values, change, submit, disabled, errors} = props

    const onChange = (evt) => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, type, checked } = evt.target;

        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      };

      const onSubmit = (evt) => {
        evt.preventDefault();
        submit()

      };

    return (
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
                <div>
                <label>Gluten Free Crust
                    <input 
                        type='checkbox'
                        name="gluten"
                        checked={values.gluten}
                        onChange={onChange}
                    />
                </label>
                </div>
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
                    <button disabled={disabled}>Submit</button>           
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </form>
    )
}