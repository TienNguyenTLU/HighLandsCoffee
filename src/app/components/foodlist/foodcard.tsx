import Image from 'next/image'
import './foodcard.css'

interface Food {
    _id: number
    name: string
    price: number
    image: string
}

export default function FoodCard({ food }: { food: Food }) {
    return (
        <div className="food-card">
            <Image
                src={food.image}
                alt={food.name}
                width={210}
                height={160}
                className="food-image"
            />
            <div className="food-details">
                <h2 className="food-name">{food.name}</h2>
                <h3 className="food-price">${food.price.toFixed(2)}</h3>
            </div>
            <button className="add-to-cart">Buy</button>
        </div>
    )
}