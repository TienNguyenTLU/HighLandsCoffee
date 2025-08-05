'use client'
import { Home } from "lucide-react"
import './topbar.css'
import Image from "next/image"
export default function Topbar()
{
    const Navlist = 
    [
        { _id : 1, name: "Trang chủ"},
        {_id: 2, name: "Đặt hàng"},
        { _id:3, name: "Liên hệ"},
        { _id: 4, name: "Thông tin"},
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