import React from 'react'
import { useParams } from 'react-router'
import NewItem from '../../components/NewItem/NewItem'
import TopCard from '../../components/TopCard/TopCard'
import { Marta } from '../../data/Martha'
import { News } from '../../data/News'
import styles from "./DetailPage.module.scss"
const DetailPage = () => {
    const { slug } = useParams()
    return (
        <div className={styles["container"]}>
            <div className={styles["left"]}>
                <TopCard slug={Marta.slug} src={Marta.image} name={Marta.name} showPosition={false} position={Marta.position} />
                <p>{Marta.description}</p>
            </div>
            <div className={styles["rigth"]}>
                <span style={{ margin: 20 }}>Publicaciones en Redes</span>
                {News.map(newItem => <NewItem item={newItem} />)}
            </div>
        </div>
    )
}

export default DetailPage
