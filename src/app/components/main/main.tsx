import './main.css'
import Topbar from "../topbar/topbar"
import Banner from '../banner/banner'
import FoodList from '../foodlist/foodlist'
import Footer from '../footer/footer'
import ServiceLayout from '../service_layout/service_layout'
import App from '../application/application'
export default function Main() {
    return (
        <main>
            <Topbar />
            <Banner />
            <h1 className='title-1'>Đồng hành cùng HighLand</h1>
            <App/>
            <ServiceLayout/>
            <FoodList/>
            <Footer/>
        </main>
    )
}
