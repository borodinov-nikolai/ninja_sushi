import React, { FC, ReactNode, forwardRef } from 'react'
import styles from './Button.module.scss'

interface Props {
    children?: ReactNode,
    [key: string]: any
}

const Button: FC<Props> = ({ children, ...props }) => {
    return (




        <button  {...props} className={styles.root} >{children}</button>
    )

}
   
  



export default Button