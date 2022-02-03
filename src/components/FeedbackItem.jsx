import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

import Card from "./shared/Card";

const FeedbackItem = ({ feedbackItem, handleDeleteFromList }) => {
    return (
        // In component file we only get the value of props
        // And to get the value we should pass props in where we use this component

        // prop={value}
        // and in component we get the prop name, not a value
        // reverseStyle={true} let it be commented

        // if we want to get function with params
        // we format function as an arrow function
        <Card>
            <div className='num-display'>{ feedbackItem.rating }</div>
            <button onClick={ () => handleDeleteFromList(feedbackItem.id) } className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">
                { feedbackItem.text }
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    feedbackItem: PropTypes.object
}

export default FeedbackItem