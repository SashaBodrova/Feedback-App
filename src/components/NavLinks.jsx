import React from 'react';
import { NavLink } from "react-router-dom";

import Card from './shared/Card'

const NavLinks = props => {
    return (
        <Card>
            <NavLink to='/' className='nav-link' activeClassName='active'>
                Home
            </NavLink>
            <NavLink to='/about' className='nav-link' activeClassName='active'>
                About
            </NavLink>
        </Card>
    )
}

export default NavLinks