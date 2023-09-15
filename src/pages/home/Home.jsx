import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import PropertyList from '../../components/propertyList/propertyList'
import './home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className='homeTitle'>Cari berdasarkan tipe akomodasi</h1>
                <PropertyList />
                <h1 className='homeTitle'>Rumah liburan yang disukai tamu</h1>
                <FeaturedProperties />
                <MailList />
            </div>
        </div>
    )
}

export default Home