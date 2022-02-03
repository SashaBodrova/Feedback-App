import React, { useState } from 'react'

import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";


const App = () => {
    // this is called "up level state"
    // we will use it down through the components
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <div>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </div>
    )
}

export default App