'use client'
import React, { useState } from 'react';
import styles from './Select.module.scss';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Выберите опцию');
  const options = ['Option 1', 'Option 2', 'Option 3'];
   console.log(selectedOption)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        {selectedOption}
      </div>
      {isOpen && (
        <ul className={`${styles.optionsList} ${isOpen ? styles.active : ''}`}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select