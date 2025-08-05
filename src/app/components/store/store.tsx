import './store.css'
import Image from 'next/image'
export default function Store()
{
    return(
        <div className="storeFind">
            <div className="text-block">
                <h1 className="title">Cửa Hàng HighLands Gần Bạn</h1>
                <p className="content">Bạn ở đâu, có HighLands ở đó</p>
                <button className="btn-find">Khám phá ngay</button>
            </div>
        <Image
            src = '/store.jpg'
            width={960}
            height={600}
            alt='store_img'
            objectFit='cover'
            className='store-img'
            />
        </div>
    )
}