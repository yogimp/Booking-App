import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link href='/' className='logo'>
                    <span>Booking.com</span>
                </Link>
                <div className='navItems'>
                    <span>Daftarkan properti Anda</span>
                    <button className='navButton'>Daftar</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar