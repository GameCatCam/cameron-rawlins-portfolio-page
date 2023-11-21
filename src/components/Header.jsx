import { Link } from 'react-router-dom';
import Navbar from './Navigation';

export default function Nav() {
    return (
        <>
            <header>
                <h1>
                    Cameron Rawlins
                </h1>
                <Navbar 
                    links={[
                        <Link key={1} className='nav-link' to='/'>
                            About
                        </Link>,
                        <Link key={2} className='nav-link' to='/portfolio'>
                            Portfolio
                        </Link>,
                        <Link key={3} className='nav-link' to='/contact'>
                            Contact
                        </Link>,
                        <Link key={4} className='nav-link' to='/Resume'>
                            Resume
                        </Link>,
                    ]}
                />
            </header>
        </>
    )
}