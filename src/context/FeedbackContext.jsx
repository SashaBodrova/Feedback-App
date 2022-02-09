import React, { createContext, useState, useEffect } from 'react'

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
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const handleFeedbackAdd = async (feedbackItem) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackItem)
        })
        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedbackItem = async (id, newUpdItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUpdItem)
        })
        const data = await response.json()

        setFeedback(feedback.map(item => item.id === id
            ? { ...item, ...data }
            : item))
    }

    const deleteFeedbackItem = async (receivedId) => {
        if(!window.confirm('Are you sure about that?')) return

        await fetch(`/feedback/${receivedId}`, {
            method: 'DELETE'
        })

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