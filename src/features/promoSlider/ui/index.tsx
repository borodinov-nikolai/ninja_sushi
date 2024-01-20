'use client'
import React from 'react'
import styles from './PromoSlider.module.scss'
import Image from 'next/image'
import img from '../assets/images/promo_image_m.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';



const PromoSlider = () => {
  return (
    <div className="container">
         <Swiper loop={true}  autoplay={{delay:4000}} speed={2000} pagination={true} modules={[Pagination, Autoplay]} className={"mySwiper " + styles.root}>
            <SwiperSlide className={styles.slide} >
            <div className={styles.image} >
                <Image src={img} width={248} height={150} alt='promo image'/>
            </div>
            <div className={styles.promoCard} ></div>
        </SwiperSlide>
            <SwiperSlide className={styles.slide} >
            <div className={styles.image} >
                <Image src={img} width={248} height={150} alt='promo image'/>
            </div>
            <div className={styles.promoCard} ></div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default PromoSlider