import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, handleDeleteFromApp }) => {
    if(!feedback || feedback.length === 0) {
        return <p>'No feedback yet...'</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map(feedbackItem => (
                    <motion.div
                        key={feedbackItem.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={ feedbackItem.id }
                            feedbackItem={ feedbackItem }
                            handleDeleteFromList={ handleDeleteFromApp }
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // Without animation
    // return (
    //     <div className='feedback-list'>
    //         {
    //             !feedback || feedback.length === 0
    //             ?
    //             'No feedback yet...'
    //             :
    //             // remember that here we return not an object
    //             // so, we need to use parentheses()
    //             feedback.map(feedbackItem => (
    //                 <FeedbackItem
    //                     key={ feedbackItem.id }
    //                     feedbackItem={ feedbackItem }
    //                     handleDeleteFromList={ handleDeleteFromApp }
    //                 />)
    //             )
    //         }
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array,
    handleDeleteFromApp: PropTypes.func
}

export default FeedbackList