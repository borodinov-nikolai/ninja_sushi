import React, { FC } from 'react'
import styles from './ProductsBlock.module.scss'
import { MobileProductCard } from '@/features/mobileProductCard'
import { ProductCard } from '@/features/productCard'
import Button from '@/shared/ui/button'


interface Props {
  title?: string,
  link?: string

}

const ProductsBlock : FC<Props> = ({title, link}) => {
  return (
    <div className='container' >
         <div className={styles.root} >
            <div className={styles.header} >
              {title && <div className={styles.title}>{title}</div>}
              <Button width={159}  height={48} variant={'primary_outlined'} >Смотреть все</Button>
            </div>
            <div className={styles.mobileCardHolder} >
                <div className={styles.mobileProductCard} >
                  <MobileProductCard />
                </div>
                <MobileProductCard/>
                <MobileProductCard/>
                <MobileProductCard/>
            </div>
            <div className={styles.cardHolder} >
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
             <div className={styles.productCard} >
              <ProductCard/>
              </div>
              </div>
              <div className={styles.footer} >
                <Button height={56} variant={'primary_outlined'}>Смотреть все позиции</Button>
              </div>
         </div>
    </div>
   
  )
}

export default ProductsBlock