'use client'
import Image from 'next/image';
import './banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
    image: '/Promo2.webp'
  },
];
    return (
        <div className='slideShow'>
            <Swiper
              className='banner-swiper'
              modules={[Autoplay,Navigation,Pagination]}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{clickable: true}}
              slidesPerView={1}
            >
              {
                banners.map((item) => 
                (
                  <SwiperSlide >
                    <div className='relative w-full h-full'>
                      <Image
                          fill
                          alt='banner_img'
                          className='banner_slide'
                          src={item.image}
                          style={{transition: 'ease-in-out 0.3s'}}
                      />
                    </div> 
                  </SwiperSlide>
                ))
              }
            </Swiper>
        </div> 
    )
}