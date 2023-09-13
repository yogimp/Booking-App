import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/688053.jpg?k=da426cecdc6492da255ca0612c4bb41bd785b2565c83405f7281f15c05b16376&o=" alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Jakarta</h1>
                    <h2>987 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/688062.jpg?k=1262974dc7e10bba90ada2c6630958862b2a7fdd480f4309032b8f9df1c2bb81&o=" alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Kuta</h1>
                    <h2>132 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/671983.jpg?k=02b0accffb426dc916b86354595184ed24673aece70c203562981e46d07605a5&o=" alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Ubud</h1>
                    <h2>433 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured