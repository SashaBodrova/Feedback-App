import React, { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext"
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet...</p>
    }

    return isLoading
        ? ( <Spinner />)
        : (<div className='feedback-list'>
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
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>)

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

export default FeedbackList