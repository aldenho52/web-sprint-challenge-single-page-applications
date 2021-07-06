import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Home () {

    const history = useHistory()

    const routeToPizza = () => {
        console.log(history)
        history.push('/pizza')
      }

    return (
        <div>
        <img
            className='home-image'
            src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            alt='pizza'
        />
        <button onClick={routeToPizza} className='home-button'>Eat Your Favorite Food!</button>
        </div>
    )
}