import Image from "next/image"
import './gift.css'
export default function Gift()
{
    return(
            <div className="Gift">
                <Image
                src = '/gift.png'
                width={940}
                height={600}
                alt='store_img'
                objectFit='cover'
                className='store-img'
                />
                <div className="text-block">
                    <h1 className="title">Merchandise Bình chất Ly chất</h1>
                    <p className="content">Khám phá các mẫu merchandise phiên bản giới hạn</p>
                    <button className="btn-find">Đặt hàng ngay</button>
                </div>
            </div>
        )
}