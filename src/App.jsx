import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AboutPage from "./pages/AboutPage";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import NavLinks from "./components/NavLinks";


const App = () => {
    return (
        <Router>

            <Header />

            <div className="container">

                <NavLinks />

                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
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