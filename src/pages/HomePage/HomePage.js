import React from 'react';

import styles from './HomePage.module.scss';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


import { dataMockSecondary } from '../../data/Secondaries';
import { dataMock } from '../../data/Top';

import SecondaryCard from '../../components/SecondaryCard/SecondaryCard';
import TopCard from '../../components/TopCard/TopCard';



const HomePage = () => {
    const history = useHistory();
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 20px 0px 20px" }}>
                <span>Los más mentirosos</span>
                <Link>Ver más</Link>
            </div>
            <div className={styles["top-cards"]}>
                {dataMock.map(item => <TopCard onClick={(slug) => { history.push(`/${slug}`) }} key={item.name} slug={item.slug} src={item.image} name={item.name} position={item.position} />)}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 20px 0px 20px" }}>
                <span>Top del Mes</span>
                <Link>Ver más</Link>
            </div>
            <div className={styles["top-cards"]}>
                {dataMockSecondary.map(item => <SecondaryCard key={item.name} slug={item.slug} src={item.image} />)}
            </div>
        </div>

    )
}

export default HomePage
