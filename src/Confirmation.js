import React from 'react'
import Order from './Order'

export default function Confirmation (props) {
    const {orders} = props
    return (
        <div>
        {
            orders.map(order => {
              return <Order key={order.id} details={order} />
            })
          }
        </div>
    )
}

