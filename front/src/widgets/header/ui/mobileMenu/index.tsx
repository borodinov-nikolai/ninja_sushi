'use client'
import React, { useState } from 'react'
import styles from './MobileMenu.module.scss'

const MobileMenu = () => {
    const [isOpen , setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.root} >
        <button onClick={()=>setIsOpen(true)} className={styles.burger} >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 10.0003C1.66699 9.54009 2.04009 9.16699 2.50033 9.16699H17.5003C17.9606 9.16699 18.3337 9.54009 18.3337 10.0003C18.3337 10.4606 17.9606 10.8337 17.5003 10.8337H2.50033C2.04009 10.8337 1.66699 10.4606 1.66699 10.0003Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 5.00033C1.66699 4.54009 2.04009 4.16699 2.50033 4.16699H17.5003C17.9606 4.16699 18.3337 4.54009 18.3337 5.00033C18.3337 5.46056 17.9606 5.83366 17.5003 5.83366H2.50033C2.04009 5.83366 1.66699 5.46056 1.66699 5.00033Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 15.0003C1.66699 14.5401 2.04009 14.167 2.50033 14.167H17.5003C17.9606 14.167 18.3337 14.5401 18.3337 15.0003C18.3337 15.4606 17.9606 15.8337 17.5003 15.8337H2.50033C2.04009 15.8337 1.66699 15.4606 1.66699 15.0003Z" fill="black" />
        </svg>
        
        </button>
        {isOpen && 
        <div className={styles.modal} >
           <button onClick={()=> setIsOpen(false)} className={styles.closeBtn} ><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0879 4.55078C16.4239 4.88671 16.4239 5.43137 16.0879 5.76731L5.76535 16.0899C5.42942 16.4258 4.88476 16.4258 4.54883 16.0899C4.21289 15.754 4.21289 15.2093 4.54883 14.8734L14.8714 4.55078C15.2073 4.21484 15.752 4.21484 16.0879 4.55078Z" fill="#1D1D1F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.54883 4.55078C4.88476 4.21484 5.42942 4.21484 5.76535 4.55078L16.0879 14.8734C16.4239 15.2093 16.4239 15.754 16.0879 16.0899C15.752 16.4258 15.2073 16.4258 14.8714 16.0899L4.54883 5.76731C4.21289 5.43137 4.21289 4.88671 4.54883 4.55078Z" fill="#1D1D1F"/>
</svg></button>
             
        </div>}
    </div>
  )
}

export default MobileMenu