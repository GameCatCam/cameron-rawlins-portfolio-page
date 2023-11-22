import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <header>
            <h1 className='site-logo'>Cameron Rawlins</h1>
            <nav className='nav-position'>
                <NavLink className='nav-link' to='/' activeclassname='active'>
                    About
                </NavLink>
                <NavLink className='nav-link' to='/portfolio' activeclassname='active'>
                    Portfolio
                </NavLink>
                <NavLink className='nav-link' to='/contact' activeclassname='active'>
                    Contact
                </NavLink>
                <NavLink className='nav-link' to='/resume' activeclassname='active'>
                    Resume
                </NavLink>
            </nav>
      </header>
    )
}