import React from 'react'
import styles from './TopCard.module.scss'
import medal1 from '../../assets/img/medal1.png'
import medal2 from '../../assets/img/medal2.png'
import medal3 from '../../assets/img/medal3.png'

const TopCard = ({ src, position, name }) => {
    return (
        <div className={styles["container"]}>
            <img className={styles["image"]} src={src} />
            <div className={styles["name"]}>
                <span>{name}</span>
            </div>
            <img className={styles["medal"]} src={getMedal(position)} />
        </div>
    )
}

const getMedal = (position) => {
    switch (position) {
        case 1:
            return medal1;
        case 2:
            return medal2;
        case 3:
            return medal3;
        default:
            return null
    }
}

export default TopCard
