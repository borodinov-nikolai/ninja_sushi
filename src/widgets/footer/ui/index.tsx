import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import img_logo from '@/shared/assets/images/logo.png';
import Link from 'next/link';
import img_fbook from '@/shared/assets/icons/fbook.png'
import img_igram from '@/shared/assets/icons/igram.png'
import img_telegram from '@/shared/assets/icons/telegram.png'
import img_mastercard from '@/shared/assets/icons/master_card.png'
import img_visa from '@/shared/assets/icons/visa.png'
import img_greenBank from '@/shared/assets/icons/green_bank.png'
import Button from '@/shared/ui/button';
const Footer = () => {
    return (
        <footer className={styles.root} >
        <div className={styles.inner + ' container'} >
            <div className={styles.leftBlock} >
                <div className={styles.logo} >
                    <Image src={img_logo} width={246} height={59} alt='footer logo' />
                    <p>В ассортименте Ninja Sushi представлены роллы, суши, сеты и напитки на любой вкус.</p>
                </div>
            </div>
            <div className={styles.navigation} >
                <h3>Навигация:</h3>
                <ul className={styles.list} >
                    <li><Link href={'#'}>Главная</Link></li>
                    <li><Link href={'#'}>Меню</Link></li>
                    <li><Link href={'#'}>Доставка</Link></li>
                    <li><Link href={'#'}>Вакансии</Link></li>
                    <li><Link href={'#'}>Новости</Link></li>
                </ul>
            </div>
            <div className={styles.checkout} >
                <h3>Офрмить заказ:</h3>
                    <ul className={styles.list} >
                        <li><Link href={'tel:+38 (067) 436 61 27'}>+38 (067) 436 61 27</Link></li>
                        <li><Link href={'tel:+38 (066) 031 76 30'}>+38 (066) 031 76 30</Link></li>
                        <li><Link href={'tel:+38 (093) 924 98 28'}>+38 (093) 924 98 28</Link></li>
                        <p>Звоните намс 9:00 до 21:00 без выходных</p>
                    </ul>
            </div>
            <div className={styles.workTime} >
                <h3>Время работы:</h3>
                <ul className={styles.list}>
                    <li>с 11:00 до 22:45</li>
                    <li>с 22.45 до 06.00</li>
                    <p>Ночная доставка</p>
                </ul>
            </div>
            <div className={styles.social} >
                <h3>Мы в соц. сетях:</h3>
                <ul className={styles.social_icons} >
                    <li><Image src={img_fbook} width={26} height={26} alt='footer social icon'/> </li>
                    <li><Image src={img_igram} width={26} height={26} alt='footer social icon'/> </li>
                </ul>
                <Button ><Image src={img_telegram} width={20} height={16} alt='telegram icon' />Техподдержка</Button>
            </div>
            <div className={styles.rightBlock} >
                <h2>Пользовательское соглашение</h2>
                <ul className={styles.rightBlock_icons} >
                    <li><Image src={img_mastercard} width={37} height={30} alt='master card' /></li>
                    <li><Image src={img_visa} width={53} height={17} alt='visa' /></li>
                    <li><Image src={img_greenBank} width={24} height={24} alt='green bank' /></li>
                </ul>
                <p>© Ninja Sushi. All right reserved.</p>
            </div>
        </div>
        
        </footer>
    )   
}

export default Footer