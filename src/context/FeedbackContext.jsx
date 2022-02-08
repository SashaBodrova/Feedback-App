import React, { createContext, useState, useEffect } from 'react'

import FeedbackData from "../data/FeedbackData";
import {v4 as uuidv4} from "uuid"

const FeedbackContext = createContext('')

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback')
        // then we need to fetch json data
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const handleFeedbackAdd = (feedbackItem) => {
        feedbackItem.id = uuidv4()
        setFeedback([feedbackItem, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedbackItem = (id, newUpdItem) => {
        setFeedback(feedback.map(item => item.id === id
            ? { ...item, ...newUpdItem }
            : item))
    }

    const deleteFeedbackItem = (receivedId) => {
        if(!window.confirm('Are you sure about that?')) return

        setFeedback(
            feedback.filter(feedbackItem => feedbackItem.id !== receivedId)
        )
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedbackItem,
            handleFeedbackAdd,
            editFeedback,
            updateFeedbackItem
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext