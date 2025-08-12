'use client'
import FoodCard from "./foodcard"
import './foodlist.css'

export default function FoodList() {
    const foods = [
        { _id: 1, name: "Nâu đá", price: 1.0, image: "/1.webp" },
        { _id: 2, name: "Đen đá", price: 1.0, image: "/2.webp" },
        { _id: 3, name: "Bạc xỉu", price: 2.0, image: "/3.webp" },
        { _id: 4, name: "Caramel", price: 2.5, image: "/4.webp" },
        { _id: 5, name: "Americano", price: 3.0, image: "/5.webp" },
    ]

    return (
        <div className="foodlist">
            {foods.map((item) => (
                <FoodCard key={item._id} food={item} />
            ))}
        </div>
    )
}