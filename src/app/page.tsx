import { Categories } from "@/features/categories";
import styles from './Home.module.scss'
import { HeroSlider } from "@/features/heroSlider";
import { ProductsBlock } from "@/widgets/productsBlock";
import { PromoSlider } from "@/features/promoSlider";


export default function Home() {
  return (
    <main className={styles.root} >
   <div className={styles.categories} ><Categories/></div>
   <div className={styles.hero} ><HeroSlider/></div>
   <div className={styles.productsBlock} ><ProductsBlock title={'Суши'} /></div>
   <div className={styles.productsBlock} ><ProductsBlock title={'Роллы'} /></div>
   <div className={styles.productsBlock} ><ProductsBlock title={'Сеты'} /></div>
   <div className={styles.promoSlider} ><PromoSlider/></div>
   <div className={styles.productsBlock} ><ProductsBlock title={'Закуски'} /></div>
   <div className={styles.productsBlock} ><ProductsBlock title={'Напитки'} /></div>
    </main>
  )
}
