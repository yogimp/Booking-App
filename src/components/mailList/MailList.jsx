import './mailList.css'

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className='mailTitle'>Hemat waktu, hemat uang!</h1>
            <span className='mailDesc'>Ayo daftar dan kami akan kirimkan promo terbaik buat Anda</span>
            <div className="mailInputContainer">
                <input type="text" placeholder='Alamat email Anda'/>
                <button>Daftar</button>
            </div>
        </div>
    )
}

export default MailList