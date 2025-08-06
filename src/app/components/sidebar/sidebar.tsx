import { MenuIcon, Navigation, Navigation2Icon } from "lucide-react";
import './sidebar.css'
export default function Sidebar()
{
    const categories = [
        { _id: 1, name: "Cà Phê", icon: "☕" },
        { _id: 2, name: "Trà", icon: "🧋" },
        { _id: 3, name: "Freeze", icon: "🧊" },
        { _id: 4, name: "Phindi", icon: "🥤" },
        { _id: 5, name: "Bánh Mì Que", icon: "🥖" },
        { _id: 6, name: "Bánh Ngọt", icon: "🥞" },
        { _id: 7, name: "Thức Uống Khác", icon: "🧃" },
        { _id: 8, name: "Bình Giữ Nhiệt", icon: "🍼" },
        { _id: 9, name: "Ly Giữ Nhiệt", icon: "🥛" },
        { _id: 10, name: "Cà Phê Đóng Gói", icon: "🥫" },
        { _id: 11, name: "Thẻ Quà Tặng", icon: "🎁" },
    ];
    return (
        <div className="container">
           <div className="title">
                <MenuIcon/>
                <p>Danh sách sản phẩm</p>
           </div>
           <ul>
                {categories.map((item) => 
                (
                    <li key={item._id}><a href="#">{item.icon} {item.name}</a></li>
                ))}
           </ul>
        </div>
    )
}