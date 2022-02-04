import React, { useState } from 'react'

import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


const App = () => {
    // this is called "up level state"
    // we will use it down through the components
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedbackItem = (receivedId) => {
        if(!window.confirm('Are you sure about that?')) return

        setFeedback(
            feedback.filter(feedbackItem => feedbackItem.id !== receivedId)
        )
    }

    return (
        <div>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedbackArray={ feedback }/>
                <FeedbackList
                    feedback={ feedback }
                    handleDeleteFromApp={ deleteFeedbackItem }
                />
            </div>
        </div>
    )
}

export default App