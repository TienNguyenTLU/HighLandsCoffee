import { ArrowBigRightDash } from 'lucide-react'
import './application_card.css'
import Image from "next/image"
type Props = {
    appType: {
        _id: number,
        title: string,
        img: string
    }
}
export default function appCard({appType}: Props)
{
    return (
        <div className="appCard">
                    <div className='block-1'>
                        <Image
                        src= {appType.img}
                        width={400}
                        height={500}
                        alt="app_img"
                        className="appCard_img"
                    />
                    <div className='arrow'>
                        <ArrowBigRightDash/>
                    </div>
                    </div>
                    <h1>{appType.title}</h1>
                </div>
    )
}