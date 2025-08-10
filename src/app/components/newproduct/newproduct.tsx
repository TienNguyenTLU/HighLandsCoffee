import './newproduct.css'
import FoodList from "../foodlist/foodlist"
export default function NewProduct()
{
    return(
        <div className="new-product-block">
            <h1>
                Sản phẩm mới
            </h1>
            <div className="list">
                <FoodList/>
            </div>
        </div>
    )
}