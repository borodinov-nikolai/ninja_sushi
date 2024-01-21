import { Categories } from "@/features/categories";
import styles from './Home.module.scss'
import { HeroSlider } from "@/features/heroSlider";
import { ProductsBlock } from "@/widgets/productsBlock";
import { PromoSlider } from "@/features/promoSlider";


export default function Home() {
  return (
    <main className={styles.root} >
   <section className={styles.categories} ><Categories/></section>
   <section className={styles.hero} ><HeroSlider/></section>
   <section className={styles.productsBlock} ><ProductsBlock title={'Суши'} /></section>
   <section className={styles.productsBlock} ><ProductsBlock title={'Роллы'} /></section>
   <section className={styles.productsBlock} ><ProductsBlock title={'Сеты'} /></section>
   <section className={styles.promoSlider} ><PromoSlider/></section>
   <section className={styles.productsBlock} ><ProductsBlock title={'Закуски'} /></section>
   <section className={styles.productsBlock} ><ProductsBlock title={'Напитки'} /></section>
    </main>
  )
}
