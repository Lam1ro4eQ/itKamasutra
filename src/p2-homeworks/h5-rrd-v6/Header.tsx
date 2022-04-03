import React from 'react'
import {NavLink} from 'react-router-dom'
import n from './Header.module.css'
import {PATH} from './Pages'


function Header() {
    return (
        <div>
            <nav className={n.nav}>
                <NavLink className={({isActive}) => isActive ? 'n.active' : '' + ' ' + n.PreJuniorLink }  to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={({isActive}) => isActive ? 'n.active' : '' + ' ' + n.JuniorLink} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={({isActive}) => isActive ? 'n.active' : '' + ' ' + n.JuniorPlusLink} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </nav>
        </div>
    )
}

export default Header
