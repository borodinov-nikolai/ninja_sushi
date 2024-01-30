'use client';
import React from 'react';
import styles from './Categories.module.scss';
import icon_rolls from '@/shared/assets/icons/rolls_category_icon.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

type Categories_list = {
  id: number,
  img: StaticImageData,
  name: string,
  url: string
};


const categories_list : Categories_list[] = [
  {
    id:1,
    img: icon_rolls,
    name: 'Роллы',
    url:'#'
  },
  {
    id:2,
    img: icon_rolls,
    name: 'Суши',
    url:'#'
  },
  {
    id:2,
    img: icon_rolls,
    name: 'Сеты',
    url:'#'
  },
  {
    id:3,
    img: icon_rolls,
    name: 'Боулы',
    url:'#'
  },
  {
    id:4,
    img: icon_rolls,
    name: 'Напитки',
    url:'#'
  },
  {
    id:5,
    img: icon_rolls,
    name: 'Соусы',
    url:'#'
  },
  {
    id:6,
    img: icon_rolls,
    name: 'Неизв...',
    url:'#'
  },
  {
    id:7,
    img: icon_rolls,
    name: 'Неизв...',
    url:'#'
  },
];


import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Categories = () => {
  return (
    <div className='container' >
      <div className={styles.root} >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={4}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        className={"mySwiper " + styles.list }
      >
       { categories_list.map(({id, img, name, url})=> {
        return (
          <SwiperSlide
              data-tid="slider"
              key={id}
              className={styles.list_item}
            >
            <Link href={url}>
          <div className={styles.list_item_inner} >
            <div className={styles.list_item_img} >
              <Image src={img} width={29} height={35} alt='rolls'/>
            </div>
            <p className={styles.list_item_text}>{name}</p>
          </div>
          </Link>
        </SwiperSlide>
        )
       })}
         
        </Swiper>
      </div>
    </div>   
  )
}

export default Categories;