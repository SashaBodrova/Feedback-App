import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from "../context/FeedbackContext"

import Card from './shared/Card'
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(0)

    const { handleFeedbackAdd, feedbackEdit, updateFeedbackItem } = useContext(FeedbackContext)

    useEffect(() => {
        if(!feedbackEdit.edit) return

        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleTextChange = e => {
        let length = text.trim().length
        if(length === 0) {
            setBtnDisabled(true)
            setMessage('Message should be at least 10 characters')
        } else if(length < 9) {
            setBtnDisabled(true)
            setMessage('Message should be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(text.trim().length < 10) return
        const newFeedback = {
            text,
            rating
        }

        if(feedbackEdit.edit === true) {
            updateFeedbackItem(feedbackEdit.item.id, newFeedback)
        } else {
            handleFeedbackAdd(newFeedback)
        }

        setText('')
    }

    return (
        <Card reverseStyle={ false }>
            <form onSubmit={ handleSubmit }>
                <h2>How would you rate service with us?</h2>
                <RatingSelect select={ (rating) => setRating(rating) } />
                <div className='input-group'>
                    <input onChange={ handleTextChange }
                           type='text'
                           placeholder='Write a review'
                           value={ text }
                    />
                    <Button type="submit"
                            isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                { message && <div className='message'>{ message }</div> }
            </form>
        </Card>
    )
}

export default FeedbackForm