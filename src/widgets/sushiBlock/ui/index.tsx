import React from 'react'
import styles from './index.module.scss'
import { MobileProductCard } from '@/features/mobileProductCard'


const SushiBlock = () => {
  return (
    <div className='container' >
         <div className={styles.root} >
            <div className={styles.title} >Суши</div>
            <div className={styles.card_holder} >
                <MobileProductCard/>
                <MobileProductCard/>
                <MobileProductCard/>
                <MobileProductCard/>
            </div>
         </div>
    </div>
   
  )
}

export default SushiBlock