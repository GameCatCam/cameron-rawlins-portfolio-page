import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <header>
            <h1 className='site-logo'>Cameron Rawlins</h1>
            <nav className='nav-position'>
                <NavLink className='nav-link' to='/' activeClassName='active'>
                    About
                </NavLink>
                <NavLink className='nav-link' to='/portfolio' activeClassName='active'>
                    Portfolio
                </NavLink>
                <NavLink className='nav-link' to='/contact' activeClassName='active'>
                    Contact
                </NavLink>
                <NavLink className='nav-link' to='/resume' activeClassName='active'>
                    Resume
                </NavLink>
            </nav>
      </header>
    )
}