import React from 'react'
import { Link } from 'react-router-dom'

import Card from "../components/shared/Card";

const AboutPage = props => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app to leave feedback for a product or a service</p>
                <p>Version: 1.0.0</p>

                <Link className='nav-link nav-link_blue' to='/'>Back to Home Rage</Link>
            </div>
        </Card>
    )
}

export default AboutPage