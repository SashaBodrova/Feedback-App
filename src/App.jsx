import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from "react-router-dom";

import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import AboutPage from "./pages/AboutPage";


const App = () => {
    // this is called "up level state"
    // we will use it down through the components
    const [feedback, setFeedback] = useState(FeedbackData)

    const handleFeedbackAdd = (feedbackItem) => {
        feedbackItem.id = uuidv4()
        setFeedback([feedbackItem, ...feedback])
    }

    const deleteFeedbackItem = (receivedId) => {
        if(!window.confirm('Are you sure about that?')) return

        setFeedback(
            feedback.filter(feedbackItem => feedbackItem.id !== receivedId)
        )
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Route exact path='/'>
                    <FeedbackForm feedbackAdd={ handleFeedbackAdd } />
                    <FeedbackStats feedbackArray={ feedback } />
                    <FeedbackList
                        feedback={ feedback }
                        handleDeleteFromApp={ deleteFeedbackItem }
                    />
                </Route>

                <Route path='/about' component={AboutPage}/>
            </div>
        </Router>
    )
}

export default App