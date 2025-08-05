import Image from 'next/image';
import './banner.css';
export default function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1>Taste the delicous</h1>
                <p>Taste the best organic fruits harvested with the best possible quality, obtaining unique and delicious flavors.</p>
                <button>Xem chi tiet</button>
            </div>
            <Image
                src="/Promo.png"
                alt="Banner Image"
                width={800}
                height={600}
                className="banner-image"
            />
        </div>
    )
}