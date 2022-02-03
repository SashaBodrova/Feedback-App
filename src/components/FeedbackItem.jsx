import React, { useState } from 'react'

import Card from "./shared/Card";

const FeedbackItem = ({ feedbackItem }) => {
    return (
        <Card>
            <div className='num-display'>{feedbackItem.rating}</div>
            <div className="text-display">
                {feedbackItem.text}
            </div>
        </Card>
    )
}

export default FeedbackItem