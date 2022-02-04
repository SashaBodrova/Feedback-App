import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Card from './shared/Card'
import Button from "./shared/Button";

const FeedbackForm = props => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = e => {
        let checkExp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,10}$/
        // /^[A-aZ-z]{10,}$/i
        let length = text.length

        if(!checkExp.test(length)) {
            console.log(checkExp ? 'true' : 'false')
            setBtnDisabled(true)
            setMessage('Message should be at least 10 characters')
        } else if(checkExp.test(length)) {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    // const handleTextChange = (e) => {
    //     let length = text.length
    //     if(length === 0) {
    //         // console.log(length + 1)
    //         setBtnDisabled(true)
    //         setMessage('Message should be at least 10 characters')
    //     } else if(length < 9) {
    //         // console.log(length + 1)
    //         setBtnDisabled(true)
    //         setMessage('Message should be at least 10 characters')
    //     } else {
    //         // console.log(length + 1)
    //         setBtnDisabled(false)
    //         setMessage(null)
    //     }
    //
    //     setText(e.target.value)
    // }

    return (
        <Card reverseStyle={false}>
            <form>
                <h2>How would you rate service with us?</h2>
                {/*  Rating select component  */}
                <div className='input-group'>
                    <input onChange={handleTextChange}
                           type='text'
                           placeholder='Write a review'
                           value={text}
                    />
                    <Button type="submit"
                            isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

FeedbackForm.propTypes = {

}

export default FeedbackForm