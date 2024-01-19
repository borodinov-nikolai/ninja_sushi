import React, { FC, ReactNode, forwardRef } from 'react'
import styles from './Button.module.scss'

interface Props {
    className?: string,
    width?: number | 'full',
    height?: number,
    variant?: 'primary' | 'primary_outlined'
    children?: ReactNode,
    [key: string]: any
}

const Button: FC<Props> = forwardRef(({ children = 'Button',
    className,
    height = 54,
    width = 311,
    variant = 'primary' ,
    ...props },
    ref: React.LegacyRef<HTMLButtonElement> | undefined) => {

    const sizes = {
        width: width === 'full'? '100%' :`${width}px`,
        height: `${height}px`
    }

    const variantsClasses = {
        primary: styles.primary,
        primary_outlined: styles.primary_outlined
    }

    const variantClass = variantsClasses[variant]

    return (




        <button style={sizes} ref={ref} {...props} className={[styles.root, variantClass, className].join(' ')} >{children}</button>
    )
})


Button.displayName = 'Button'
export default Button