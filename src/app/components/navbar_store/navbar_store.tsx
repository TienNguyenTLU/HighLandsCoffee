import { PhoneCall, SearchIcon, ShoppingCartIcon, UserCircle } from 'lucide-react'
import './navbar_store.css'
import Image from 'next/image'
export default function NavbarStore()
{
    return(
        <div className='Top-panel'>
            <Image
                src={'/logo.svg'}
                alt={"Logo_img"}
                width={100}
                height={100}
                className='top_panel_logo'
                />
            <div className='searchBar'>
                <input type="text" placeholder='Xin chào, bạn cần gì hôm nay ?' className='searchInp' />
                <a href="#"><SearchIcon/></a>
            </div>
            <div className='delivery'>
                <PhoneCall/>
                <ul>
                    <li>Giao tận nơi</li>
                    <li>19001755</li>
                </ul>
            </div>
            <div className='cart'>
                <a href="/cart">
                    <ShoppingCartIcon/>
                </a>
                Giỏ hàng
            </div>
            <div className='login'>
                <UserCircle/>
                <a href="/login">Đăng nhập</a>
                /
                <a href="/register">Đăng kí</a>
            </div>
        </div>
    )
}