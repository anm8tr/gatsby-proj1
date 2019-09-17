import React from 'react'
import { Link } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header className={headerStyles.header}>
            <h1>Richard Garrison</h1>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyles.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header