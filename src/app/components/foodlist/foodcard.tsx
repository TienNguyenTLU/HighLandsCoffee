import './foodcard.css'
type Props = {
    food: {
        name: string,
        image: string,
        price: number
    }
}
export default function FoodCard({food}: Props) {
    return (
        <div className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <div className="food-details">
                <h2 className="food-name">{food.name}</h2>
                <h3 className="food-price">${food.price}</h3>
            </div>
            <button className="add-to-cart">Buy</button>
        </div>
    );
}