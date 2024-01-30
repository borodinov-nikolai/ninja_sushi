import React from 'react'
import styles from './MobileProductCard.module.scss'
import Image from 'next/image'
import img from '@/shared/assets/images/Гункан_лосось_м.png'

const MobileProductCard = () => {
    return (
        <div className={styles.root} >
            <div className={styles.leftBlock} >
                <Image className={styles.image} src={img} width={96} height={96} alt='sushi' />
            </div>
            <div className={styles.rightBlock} >
                <h3 className={styles.title} >Гункан лосось</h3>
                <p className={styles.weight} >Вес: 40г</p>
                <p className={styles.composition} >Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло</p>
                <div className={styles.footer} >
                    <p className={styles.price} >250<span>₽</span></p>

                    <button className={styles.favoriteBtn} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.67231 6.88373C2.99301 8.03334 2.76944 9.54025 2.98536 10.8356C3.41005 13.3834 5.61967 15.6795 7.96408 17.4158C9.10741 18.2625 10.2252 18.9342 11.0586 19.3944C11.4433 19.6068 11.7654 19.7731 11.999 19.8898C12.2326 19.7731 12.5547 19.6068 12.9394 19.3944C13.7728 18.9342 14.8906 18.2625 16.034 17.4158C18.3784 15.6795 20.588 13.3835 21.0127 10.8356C21.2286 9.54027 21.005 8.03335 20.3256 6.88373C19.6716 5.77693 18.6052 5 16.9991 5C15.3919 5 14.4126 5.78198 13.799 6.60001C13.4861 7.01722 13.2741 7.43971 13.1408 7.75963C13.0747 7.91826 13.0295 8.04799 13.0018 8.13415C12.988 8.17712 12.9786 8.20893 12.9733 8.2277L12.9683 8.24572L12.9687 8.24416C12.9685 8.24522 12.9686 8.24466 12.9683 8.24572C12.9682 8.24607 12.9684 8.2455 12.9683 8.24572C12.8556 8.68873 12.4565 9.00001 11.999 9C11.5415 8.99999 11.1425 8.68955 11.0299 8.24651C11.0298 8.2463 11.0299 8.24684 11.0299 8.24651L11.0247 8.22766C11.0193 8.2089 11.01 8.17709 10.9962 8.13412C10.9685 8.04796 10.9233 7.91823 10.8572 7.7596C10.7239 7.43969 10.5119 7.0172 10.199 6.59999C9.5855 5.78198 8.60615 4.99999 6.99893 5C5.39271 5.00001 4.3263 5.77695 3.67231 6.88373ZM11.999 8C11.0288 8.24252 11.029 8.24295 11.0291 8.24337L11.0296 8.24538L11.0299 8.24651M11.999 5.68095C11.9361 5.58783 11.8695 5.49398 11.799 5.4C10.9125 4.218 9.39184 2.99999 6.99893 3C4.60502 3.00001 2.92142 4.22307 1.95045 5.86628C1.00478 7.46667 0.728432 9.45975 1.01258 11.1644C1.57439 14.5349 4.36478 17.2389 6.77376 19.023C8.00712 19.9364 9.20437 20.6551 10.0918 21.1452C10.5364 21.3907 10.9056 21.5801 11.1655 21.709C11.2955 21.7734 11.3984 21.8229 11.4699 21.8567C11.5057 21.8736 11.5337 21.8866 11.5532 21.8957L11.5763 21.9063L11.583 21.9094L11.5852 21.9104C11.5855 21.9105 11.5865 21.9109 11.999 21L11.5865 21.9109C11.8487 22.0297 12.1493 22.0297 12.4115 21.911L11.999 21C12.4115 21.911 12.4112 21.9111 12.4115 21.911L12.4149 21.9094L12.4217 21.9063L12.4447 21.8957C12.4643 21.8866 12.4923 21.8736 12.528 21.8567C12.5996 21.8229 12.7024 21.7734 12.8325 21.709C13.0924 21.5801 13.4616 21.3907 13.9062 21.1452C14.7936 20.6551 15.9909 19.9364 17.2243 19.023C19.6333 17.2389 22.4237 14.5349 22.9855 11.1644C23.2696 9.45973 22.9932 7.46665 22.0475 5.86627C21.0765 4.22307 19.3929 3 16.9991 3C14.6062 3 13.0855 4.21802 12.199 5.39999C12.1285 5.49398 12.0619 5.58783 11.999 5.68095Z" fill="#686870" />
                        </svg>
                    </button>
                    <button className={styles.addToCartBtn} >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileProductCard