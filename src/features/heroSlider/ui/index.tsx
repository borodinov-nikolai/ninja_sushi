'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './index.module.scss';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Button from '@/shared/ui/button';

export default function HeroSlider() {
  return (
    
      <Swiper loop={true}  autoplay={{delay:4000}} speed={2000} pagination={true} modules={[Pagination, Autoplay]} className={"mySwiper " + styles.root}>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Киеве! Пока только на левом берегу 1</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button  width={'full'} className={styles.btn} >Перейти к новости</Button>
          </div> 
        </SwiperSlide>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Киеве! Пока только на левом берегу 2</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button  width={'full'} className={styles.btn} >Перейти к новости</Button>
          </div> 
        </SwiperSlide>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Киеве! Пока только на левом берегу 3</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button  width={'full'}>Перейти к новости</Button>
          </div> 
        </SwiperSlide>
        <SwiperSlide className={styles.slide} > 
        <div  className={styles.slide_image}></div> 
        <div className={styles.slide_text} >
          <h2>Ninja Sushi в Киеве! Пока только на левом берегу 4</h2>
          <p>Доставку делаем с 10:00 до 19:30</p>
          <Button width={'full'} className={styles.btn} >Перейти к новости</Button>
          </div> 
        </SwiperSlide>
       
       
      
      </Swiper>
  
  );
}