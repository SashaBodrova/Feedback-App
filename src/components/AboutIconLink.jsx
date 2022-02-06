import React from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import { FaQuestion } from 'react-icons/fa'

const AboutIconLink = props => {
    return (
        <div className='about-link'>
            <Link data-tip='Go to About Page' to='/about'>
                <FaQuestion size={ 30 } />
            </Link>
            <ReactTooltip />
        </div>
    )
}

export default AboutIconLink