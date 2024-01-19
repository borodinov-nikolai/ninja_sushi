import { Categories } from "@/features/categories";
import styles from './Home.module.scss'
import { HeroSlider } from "@/features/heroSlider";
import { SushiBlock } from "@/widgets/sushiBlock";


export default function Home() {
  return (
    <main className={styles.root} >
   <div className={styles.categories} ><Categories/></div>
   <div className={styles.hero} ><HeroSlider/></div>
   <div className={styles.sushiBlock} ><SushiBlock/></div>
    </main>
  )
}
