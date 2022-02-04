import React from 'react'
import PropTypes from 'prop-types'

import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, handleDeleteFromApp }) => {
    return (
        <div className='feedback-list'>
            {
                !feedback || feedback.length === 0
                ?
                'No feedback yet...'
                :
                // remember that here we return not an object
                // so, we need to use parentheses()
                feedback.map(feedbackItem => (
                    <FeedbackItem
                        key={ feedbackItem.id }
                        feedbackItem={ feedbackItem }
                        handleDeleteFromList={ handleDeleteFromApp }
                    />)
                )
            }
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array,
    handleDeleteFromApp: PropTypes.func
}

export default FeedbackList