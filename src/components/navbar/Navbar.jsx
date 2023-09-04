import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>Booking.com</span>
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