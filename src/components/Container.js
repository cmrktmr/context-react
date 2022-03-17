import React from 'react'
import { useContext } from 'react'
import Header from './Header'
import Button from './Buttons'
import ThemeContext from '../context/ThemeContext'


function Container() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`app ${theme === 'dark' ? theme : ''}`}>
            <Header />
            <hr />
            <Button />
        </div>
    )
}

export default Container