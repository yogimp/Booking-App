import { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'


// eslint-disable-next-line react/prop-types
const Header = ({ type }) => {

    const [ openDate, setOpenDate ] = useState(false)
    const [ date, setDate ] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [ openOptions, setOpenOptions ] = useState(false)
    const [ options, setOptions ] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions( prev => {
            return {
                ...prev,
                [name] : operation === 'i' ? options[name] + 1 : options[name] -1
            }
        })
    }

    return (
        <div className='header'>
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
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
                { type !== "list" && <>
                    <h1 className='headerTitle'>Temukan akomodasi berikutnya</h1>
                    <p className="headerDesc">Cari promo hotel, rumah liburan, dan banyak lagi ...</p>
                    <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className='headerIcon' />
                            <input 
                                type="text" 
                                placeholder='Mau pergi kemana?' 
                                className='headerSearchInput'
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                            {openDate && <DateRange 
                                editableDateInputs= {true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection= {false}
                                ranges={date}
                                className='date'
                            />}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} dewasa · ${options.children} anak · ${options.room} kamar`}</span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Dewasa</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={() => handleOption('adult', 'd')} disabled={options.adult <= 1}>-</button>
                                        <span className='optionCounterNumber'>{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Anak</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={() => handleOption('children', 'd')} disabled={options.children <= 0}>-</button>
                                        <span className='optionCounterNumber'>{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Kamar</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={() => handleOption('room', 'd')} disabled={options.room <= 1}>-</button>
                                        <span className='optionCounterNumber'>{options.room}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="headerSearchItem">
                            <button className='headerBtn'>Cari</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Header