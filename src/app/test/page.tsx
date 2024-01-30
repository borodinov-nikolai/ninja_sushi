import Input from '@/shared/ui/textInput'
import React from 'react'
import styles from './Test.module.scss';
import Range from '@/shared/ui/range';
import Checkbox from '@/shared/ui/checkbox';
import RadioButton from '@/shared/ui/radioButton';
import Select from '@/shared/ui/select';
import Switch from '@/shared/ui/switch';

const Test = () => {
  return (
    <div className={styles.root} >
        <Input/>
        <Range/>
        <Checkbox/>
        <RadioButton/>
        <Select/>
        <Switch/>
    </div>
  )
}

export default Test