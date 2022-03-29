import React from 'react'
import {BrowserRouter,HashRouter} from 'react-router-dom'
import Header from './Header'
import Pages from './Pages'


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

            <BrowserRouter>

            <Header/>

            <Pages/>

            </BrowserRouter>
        </div>
    )
}

export default HW5
