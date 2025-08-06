import './main_store.css'
import NavbarStore from "../navbar_store/navbar_store"
import Banner from '../banner/banner'
import Sidebar from '../sidebar/sidebar'
export default function MainStore()
{
    return(
        <main>
            <NavbarStore/>
            <div className='block-1'>
                <Sidebar/>
                <Banner/>
            </div>  
        </main>
    )
}