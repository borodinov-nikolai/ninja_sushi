import Input from '@/shared/ui/input'
import React from 'react'
import styles from './Test.module.scss';
import Range from '@/shared/ui/range';

const Test = () => {
  return (
    <div className={styles.root} >
        <Input/>
        <Range/>
    </div>
  )
}

export default Test