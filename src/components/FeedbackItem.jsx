import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ feedbackItem }) => {
    const { deleteFeedbackItem, editFeedback } = useContext(FeedbackContext)

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
            <button onClick={ () => deleteFeedbackItem(feedbackItem.id) } className="close">
                <FaTimes color='purple' />
            </button>
            <button onClick={ () => editFeedback(feedbackItem) } className='edit'>
                <FaEdit color='purple' />
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