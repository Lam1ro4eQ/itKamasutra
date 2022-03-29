import React from 'react'
import { NavLink } from 'react-router-dom'
import n from './Header.module.css'
import { PATH } from './Pages'


function Header() {
    return (
        <div>
            <nav className={n.nav}>
                <div className={n.item}>
                    <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
