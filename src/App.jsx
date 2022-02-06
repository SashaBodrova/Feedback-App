import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import NavLinks from "./components/NavLinks";


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

                <NavLinks />

                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm feedbackAdd={ handleFeedbackAdd } />
                            <FeedbackStats feedbackArray={ feedback } />
                            <FeedbackList
                                feedback={ feedback }
                                handleDeleteFromApp={ deleteFeedbackItem }
                            />
                        </>
                    } />

                    <Route path='/about' element={ <AboutPage /> }/>
                </Routes>

                <AboutIconLink />

            </div>
        </Router>
    )
}

export default App