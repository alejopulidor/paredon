import React from 'react'
import styles from './SecondaryCard.module.scss'

const SecondaryCard = ({ src }) => {
    return (
        <div className={styles["container"]}>
            <img className={styles["image"]} src={src} />
        </div>
    )
}

export default SecondaryCard
