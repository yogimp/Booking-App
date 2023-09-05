import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Akomodasi</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Penerbangan</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Rental mobil</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Atraksi wisata</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taksi bandara</span>
                    </div>
                </div>
                <h1 className='headerTitle'>Temukan akomodasi berikutnya</h1>
                <p className="headerDesc">Cari promo hotel, rumah liburan, dan banyak lagi ...</p>
                <button className="headerBtn">Sign in / Register</button>
            </div>
        </div>
    )
}

export default Header