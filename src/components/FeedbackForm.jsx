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

    const { handleFeedbackAdd, feedbackEdit } = useContext(FeedbackContext)

    useEffect(() => {
        console.log('here')
    }, [feedbackEdit])

    const handleTextChange = e => {
        let length = text.trim().length
        if(length === 0) {
            // console.log(length + 1)
            setBtnDisabled(true)
            setMessage('Message should be at least 10 characters')
        } else if(length < 9) {
            // console.log(length + 1)
            setBtnDisabled(true)
            setMessage('Message should be at least 10 characters')
        } else {
            // console.log(length + 1)
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

        handleFeedbackAdd(newFeedback)

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