import React from 'react'
import styles from './LocationBlock.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import img_app_m from '../assets/images/app_image_m.png'
import img_app from '../assets/images/app_image.png'
import img_app_store from '@/shared/assets/icons/app_store.png'
import img_google_play from '@/shared/assets/icons/google_play.png'

const LocationBlock = () => {
  return (
    <div>    <div className={styles.location} >
    <h2 className={styles.location_title} >Каждая кухня работает со своей зоной доставки, чтобы привезти еду максимально быстро</h2>
    <ul className={styles.location_markers} >
        <li className={styles.location_marker} >
            <div className={styles.location_greenCircle} ></div>
            <span>—</span>
            <p>Бесплатная доставка</p>
        </li>
        <li className={styles.location_marker} >
            <div className={styles.location_orangeCircle} ></div>
            <span>—</span>
            <p>Платная доставка</p>
        </li>
        <li className={styles.location_marker} >
            <div className={styles.location_redCircle} ></div>
            <span>—</span>
            <p>Доставку не делаем</p>
        </li>

    </ul>
    <div className={styles.location_map} ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.2626130929425!2d38.97086987713647!3d45.039892461647945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f9c2224cafb%3A0x5c1c5247a63a9634!2z0JPQsNC70LXRgNC10Y8g0JrRgNCw0YHQvdC-0LTQsNGA!5e0!3m2!1sru!2sru!4v1705868953707!5m2!1sru!2sru" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
</div>

<div className={styles.app + ' container'} >
    <div className={styles.app_inner} >
        <div className={styles.app_image_m} >
            <Image src={img_app_m} width={253} height={236} alt='footer app image' />
        </div>
        <div className={styles.app_image} >
        <Image src={img_app} width={714} height={644} alt='footer app image' />
        </div>
        
        <div className={styles.app_textHolder}>
            <h2 className={styles.app_title} >Ниндзя - это семья.Скачивайте наше приложение</h2>
            <p className={styles.app_description} >Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться голодным.</p>
            <div className={styles.app_downloads} >
                <div className={styles.sapp_appStore} >
                    <Link href="#"><Image src={img_app_store} width={119} height={39} alt='app store' /></Link>
                </div>
                <div className={styles.app_googlePlay} >
                    <Link href="#"><Image src={img_google_play} width={119} height={39} alt='google play' /></Link>
                </div>
            </div>
        </div>

    </div>
</div>

<div className={styles.aboutUs + ' container'} >
    <p className={styles.aboutUs_text} >В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.</p>
    <div className={styles.aboutUs_more} >Читать больше <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8173 8.78664C15.7521 7.85628 17.2676 7.85628 18.2024 8.78664L27.7768 18.3161C28.7116 19.2464 28.7116 20.7548 27.7768 21.6852L18.2024 31.2146C17.2676 32.145 15.7521 32.145 14.8173 31.2146C13.8825 30.2843 13.8825 28.7758 14.8173 27.8455L22.6992 20.0006L14.8173 12.1558C13.8825 11.2254 13.8825 9.71701 14.8173 8.78664Z" />
    </svg>
    </div>
</div></div>
  )
}

export default LocationBlock