import { Categories } from "@/features/categories";
import styles from './Home.module.scss'


export default function Home() {
  return (
    <main className={styles.root} >
   <div className={styles.categories} ><Categories/></div>
    </main>
  )
}
