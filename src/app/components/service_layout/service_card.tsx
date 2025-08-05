import './service_card.css'
import Image from "next/image"
export default function ServiceCard({Foodtype})
{
    return (
        <div className="srvCard">
            <Image
                src= {Foodtype.image}
                width={600}
                height={7000}
                alt="service_img"
                className="srvCard_img"
            />
            <div className="bot_panel">
                <h1>{Foodtype.title}</h1>
            </div>
        </div>
    )
}