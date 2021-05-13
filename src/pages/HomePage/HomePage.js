import React from 'react';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import TopCard from '../../components/TopCard/TopCard';
import { dataMock } from '../../data/Top';
import styles from './HomePage.module.scss';



const HomePage = () => {
    return (
        <div>
            <HeaderNavBar />
            <div className={styles["top-cards"]}>
                {dataMock.map(item => <TopCard src={item.image} name={item.name} position={item.position} />)}
            </div>
        </div>

    )
}

export default HomePage
