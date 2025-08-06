'use client'
import Image from 'next/image';
import './banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function Banner() {
    const banners = [
  {
    id: 1,
    image: '/Promo1.webp'
  },
  {
    id: 2,
    image: '/Promo2.jpg'
  },
  {
    id: 3,
    image: '/Promo3.jpg'
  },
];
    return (
        <div className='slideShow'>
            <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="banner-swiper"
        >
        {banners.map((item) => (
            <SwiperSlide className='image-wrapper' key={item.id}>
                    <Image
                    src={item.image}
                    alt={"banner_img"}
                    width={1500}
                    height={1000}
                    className="banner-image"
                    objectFit='cover'
                    />
            </SwiperSlide>
            ))}
            </Swiper>
        </div> 
    )
}