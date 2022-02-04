import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({ feedbackArray }) => {

    const average = feedbackArray.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedbackArray.length

    return (
        <div className='feedback-stats'>
            <h4>{ feedbackArray.length } Reviews</h4>
            <h4>Average Rating: {}
                { isNaN(average)
                    ? 0
                    : average.toFixed(1)
                }
            </h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedbackArray: PropTypes.array
}

export default FeedbackStats