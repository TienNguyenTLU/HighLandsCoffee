'use client'
import { Home, Map } from "lucide-react"
import './topbar.css'
import Image from "next/image"
export default function Topbar()
{
    const Navlist = 
    [
        { _id : 1, name: "Trang chủ",icon : ''},
        {_id: 2, name: "Đặt hàng",icon : ''},
        { _id:3, name: "Liên hệ",icon : ''},
        {_id: 4, name: "Tìm kiếm cửa hàng", icon : <Map/>},
        { _id: 5, name: "Thông tin",icon : ''},
    ]
    return (
        <div className="topbar">
            <div className="brand">
                <a href="#">
                    <Image
                        src="/logo.svg"
                        alt="Banner Image"
                        width={130}
                        height={100}
                        className="logo"
                    />
                </a>
            </div>
            <div className="nav">
                <ul>
                    {Navlist.map((item) => (
                        <li key={item._id}><a href="#">{item.name}</a></li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}