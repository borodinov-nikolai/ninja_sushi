'use client'
import React, { useRef } from 'react'
import styles from './PromoSlider.module.scss'
import Image from 'next/image'
import img_m from '../assets/images/promo_image_m.png';
import img from '../assets/images/promo_image.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Button from '@/shared/ui/button';



const PromoSlider = () => {

  return (
    <div className="container">
         <div className={styles.root} >
                   <div className={styles.nextBtn + ' promoSlider__swiperNextBtn'}>
                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8173 8.78664C15.7521 7.85628 17.2676 7.85628 18.2024 8.78664L27.7768 18.3161C28.7116 19.2464 28.7116 20.7548 27.7768 21.6852L18.2024 31.2146C17.2676 32.145 15.7521 32.145 14.8173 31.2146C13.8825 30.2843 13.8825 28.7758 14.8173 27.8455L22.6992 20.0006L14.8173 12.1558C13.8825 11.2254 13.8825 9.71701 14.8173 8.78664Z" fill="#1D1D1F"/>
</svg>
</div>
                   <div className={styles.prevBtn + ' promoSlider__swiperPrevBtn'}>
                   <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8173 8.78664C15.7521 7.85628 17.2676 7.85628 18.2024 8.78664L27.7768 18.3161C28.7116 19.2464 28.7116 20.7548 27.7768 21.6852L18.2024 31.2146C17.2676 32.145 15.7521 32.145 14.8173 31.2146C13.8825 30.2843 13.8825 28.7758 14.8173 27.8455L22.6992 20.0006L14.8173 12.1558C13.8825 11.2254 13.8825 9.71701 14.8173 8.78664Z" fill="#1D1D1F"/>
</svg>
                   </div>
           <Swiper slidesPerView={1} spaceBetween={40}  loop={true} navigation={{prevEl:'.promoSlider__swiperPrevBtn',nextEl:'.promoSlider__swiperNextBtn',}} pagination={{clickable:true}} modules={[Pagination, Navigation, Autoplay]} className={"mySwiper " + styles.swiper}>
              <SwiperSlide className={styles.slide} >
              <div className={styles.mobileImage} >
                  <Image src={img_m} width={248} height={150} alt='promo image'/>
              </div>
              <div className={styles.desktopImage} >
              <Image src={img} width={915} height={536} alt='promo image'/>
              </div>
              <div className={styles.promoCard} >
                <div className={styles.description} >
                  <h3 className={styles.title} >Филадельфия с креветками</h3>
                  <p className={styles.composition} >Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло</p>
                  <div className={styles.buy} >
                    <div className={styles.addToCartBtn} > <Button variant={'primary_outlined'} >Заказать</Button></div>
                    <div className={styles.price} >250 <span>₽</span></div>
                  </div>
                </div>
                <div className={styles.banner}>
                  <p>Лучшее предложение недели!</p>
                </div>
              </div>
                   </SwiperSlide>
                   <SwiperSlide className={styles.slide} >
              <div className={styles.mobileImage} >
                  <Image src={img_m} width={248} height={150} alt='promo image'/>
              </div>
              <div className={styles.desktopImage} >
              <Image src={img} width={915} height={536} alt='promo image'/>
              </div>
              <div className={styles.promoCard} >
                <div className={styles.description} >
                  <h3 className={styles.title} >Филадельфия с креветками</h3>
                  <p className={styles.composition} >Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло</p>
                  <div className={styles.buy} >
                    <div className={styles.addToCartBtn} > <Button variant={'primary_outlined'} >Заказать</Button></div>
                    <div className={styles.price} >250 <span>₽</span></div>
                  </div>
                </div>
                <div className={styles.banner}>
                  <p>Лучшее предложение недели!</p>
                </div>
              </div>
                   </SwiperSlide>
                   </Swiper>
         </div>
    </div>
  )
}

export default PromoSlider