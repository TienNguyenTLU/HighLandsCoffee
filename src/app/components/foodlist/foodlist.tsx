'use client'
import FoodCard from "./foodcard"
import './foodlist.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
export default function FoodList()
{
    const mockFoods = [
        {name: "Nâu đá",price: 1.00, image: "./1.webp" },
        {name: "Đen đá",price: 1.00, image: "./2.webp" },
        {name: "Bạc xỉu",price: 2.00, image: "./3.webp" },
        {name: "Caramel", price: 2.5, image: "./4.webp"},
        {name: "Americano", price: 3.0, image: "./5.webp"},
    ]
    return (
        <div className="foodlist">
             <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={45}
                slidesPerView={4}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                navigation
                loop={true}>
                {mockFoods.map((food, index) => (
                <SwiperSlide key={index}>
                    <FoodCard food={food} />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}