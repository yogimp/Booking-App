import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fProperties'>
            <div className="fPropertiesItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className='fPropertiesImg'/>
                <span className='fPropertiesName'>Aparthotel Stare Miasto</span>
                <span className='fPropertiesCity'>Polandia</span>
                <span className='fPropertiesPrice'>Starting from $210</span>
                <div className="fPropertiesRate">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fPropertiesItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/235873503.webp?k=9728711e2a8a9882b47bc557a7bc184525bfd06f13cc49d7a4cfa575316d09a2&o=" alt="" className='fPropertiesImg'/>
                <span className='fPropertiesName'>LITTLE PARIS by CityLife Suites</span>
                <span className='fPropertiesCity'>Romania</span>
                <span className='fPropertiesPrice'>Starting from $200</span>
                <div className="fPropertiesRate">
                    <button>8.4</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fPropertiesItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className='fPropertiesImg'/>
                <span className='fPropertiesName'>7Seasons Apartments Budapest</span>
                <span className='fPropertiesCity'>Hungaria</span>
                <span className='fPropertiesPrice'>Starting from $120</span>
                <div className="fPropertiesRate">
                    <button>8.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fPropertiesItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/348318206.webp?k=fc5cf40664adabf841df9ce8b7e362ad51381a14634ff2fb25999a11f562a3ab&o=" alt="" className='fPropertiesImg'/>
                <span className='fPropertiesName'>Eolian Port B&B</span>
                <span className='fPropertiesCity'>Italia</span>
                <span className='fPropertiesPrice'>Starting from $110</span>
                <div className="fPropertiesRate">
                    <button>9.6</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties