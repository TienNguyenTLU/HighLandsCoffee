import Image from "next/image"
import './footer.css'
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
export default function Footer()
{
    return (
        <footer>
            <div className="block-1">
                <Image
                src="/logo.svg"
                alt="Banner Image"
                width={130}
                height={100}
                className="footer-image"
            />
            <p>
                © 2025 Highlands Coffee. All rights reserved
            </p>
            </div>
            <div className="block-2">
                <h3 className="block-2-title">Về HighLand</h3>
                <ul>
                    <li>Nguồn gốc</li>
                    <li>Dịch vụ</li>
                    <li>Nghề nghiệp</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div className="block-3">
                <h3 className="block-3-title">Hệ thống cửa hàng</h3>
                <ul>
                    <li>Tìm cửa hàng gần nhất </li>
                </ul>
            </div>
            <div className="block-4">
                <h3 className="block-4-title">
                    Tin tức
                </h3>
            </div>
            <div className="block-5">
                <h3 className="block-5-title">Theo dõi chúng tôi</h3>
                <ul className="icon-list">
                    <li><Facebook/></li>
                    <li><Youtube/> </li>
                    <li> <Instagram/> </li>
                    <li> <Linkedin/></li>
                </ul>
            </div>
        </footer>
    )
}