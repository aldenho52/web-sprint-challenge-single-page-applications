import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Working fetching your order&apos;s details...</h3>
  }

  return (
    <div className='order-container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <p>Civil: {details.civil}</p>

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Hobbies:
          <ul>
            {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Order
