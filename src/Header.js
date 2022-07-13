import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <header>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/sign-up">Sign up</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        </header>
    )
}

export default Header