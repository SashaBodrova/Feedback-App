import React from 'react'
import spinner from '../assets/spinner.gif.url'

const Spinner = props => {
    return <img
        src={spinner}
        alt='Loading...'
        style={{
            width: '100px',
            margin: 'auto',
            display: 'block'
        }}/>
}

export default Spinner