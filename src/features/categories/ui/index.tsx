import React from 'react'
import styles from './Categories.module.scss'
import icon_rolls from '@/shared/assets/icons/rolls_category_icon.png'
import Image, { StaticImageData } from 'next/image'


type Categories_list = {
  id: number,
  img: StaticImageData,
  name: string
}


const categories_list : Categories_list[] = [
  {
    id:1,
    img: icon_rolls,
    name: 'Роллы'
  },
  {
    id:2,
    img: icon_rolls,
    name: 'Суши'
  },
  {
    id:2,
    img: icon_rolls,
    name: 'Сеты'
  },
  {
    id:3,
    img: icon_rolls,
    name: 'Боулы'
  },
  {
    id:4,
    img: icon_rolls,
    name: 'Напитки'
  },
  {
    id:5,
    img: icon_rolls,
    name: 'Соусы'
  },
  {
    id:6,
    img: icon_rolls,
    name: 'Неизв...'
  },
  {
    id:7,
    img: icon_rolls,
    name: 'Неизв...'
  },
]

const Categories = () => {
  return (
    <div className='container' >
      <div className={styles.root} >
        <ul className={styles.list} >
       { categories_list.map(({id, img, name})=> {
        return (
          <li key={id} className={styles.list_item} >
          <div className={styles.list_item_inner} >
            <div className={styles.list_item_img} >
              <Image src={img} width={29} height={35} alt='rolls'/>
            </div>
            <p className={styles.list_item_text}>{name}</p>
          </div>
        </li>
        )
       })}
         
        </ul>
      </div>
    </div>   
  )
}

export default Categories