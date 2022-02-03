import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, reverseStyle }) => {
    return (
        // notice how we set class through the condition
        // use {} and backticks`` in it to use JS interpolation
        // + JS common ${} syntax to set conditional expression
        <div className={`card ${reverseStyle && 'reverse'}`}>
            {children}
        </div>

        // else we can use conditional style
        // <div
        //     className='card'
        //     style={{
        //         backgroundColor: reverseStyle ? 'rgba(0,0,0,0.4)' : '#fff',
        //         color: reverseStyle ? '#fff' : '#000'
        //     }}
        // >
        //     {children}
        // </div>
    )
}

Card.defaultProps = {
    reverseStyle: true
}

Card.propTypes = {
    children: PropTypes.node,
    reverseStyle: PropTypes.bool
}

export default Card