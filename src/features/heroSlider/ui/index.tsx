'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HeroSlider.module.scss';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Button from '@/shared/ui/button';

export default function HeroSlider() {
  return (
    
      <Swiper loop={true} spaceBetween={40} autoplay={{delay:4000}} speed={2000} pagination={true} modules={[Pagination, Autoplay]} className={"mySwiper " + styles.root}>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Краснодаре! Пока только в тц Галерея</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button  width={'full'} className={styles.btn} >Перейти к новости</Button>
          </div> 
        </SwiperSlide>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Краснодаре! Пока только в тц Галерея</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button  width={'full'} className={styles.btn} >Перейти к новости</Button>
          </div> 
        </SwiperSlide>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Краснодаре! Пока только в тц Галерея</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button  width={'full'}>Перейти к новости</Button>
          </div> 
        </SwiperSlide>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Краснодаре! Пока только в тц Галерея</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button width={'full'} className={styles.btn} >Перейти к новости</Button>
          </div> 
        </SwiperSlide>
       
       
      
      </Swiper>
  
  );
}