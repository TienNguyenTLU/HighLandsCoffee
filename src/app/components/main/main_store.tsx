import './main_store.css'
import NavbarStore from "../navbar_store/navbar_store"
import Banner from '../banner/banner'
import Sidebar from '../sidebar/sidebar'
import NewProduct from '../newproduct/newproduct'
export default function MainStore()
{
    return(
        <main>
            <NavbarStore/>
            <div className='block-1'>
                <Sidebar/>
                <Banner/>
            </div>  
            <div className='block-2'>
                <NewProduct/>
            </div>
        </main>
    )
}