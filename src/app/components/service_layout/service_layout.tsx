import './service_layout.css'
import ServiceCard from './service_card'
import Image from 'next/image'
export default function ServiceLayout()
{
    const Foodtype = [
        {
            _id : 1,
            title:"Nước ngon thưởng vị", 
            image: '/drink.png'
        },
        {
            _id: 2,
            title:"Bánh ngon no đầy", 
            image: '/bread.png'
        }
    ]
    return (
        <div className="srv">
            <ul>
                {Foodtype.map((item) => 
                (
                    <li key={item._id}>
                        <ServiceCard Foodtype={item}/>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}