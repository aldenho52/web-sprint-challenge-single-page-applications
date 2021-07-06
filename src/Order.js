import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Working fetching your order&apos;s details...</h3>
  }

  return (
    <div className='order-container'>
    <h2>Order Details</h2>
      <h3>{details.name}</h3>
      <p>Size: {details.size}</p>
      <p>Gluten Free Crust: {details.gluten ? 'Yes' : 'No'}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
      <p>Special Instructions: {details.instructions}</p>
    </div>
  )
}

export default Order
