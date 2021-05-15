import React from 'react';
import styles from './NewItem.module.scss';

const NewItem = ({ item }) => {
    const getIcon = (social) => {
        console.log(social)
        switch (social) {
            case "facebook":
                return <i className="fab fa-facebook-f"></i>;
            case "twitter":
                return <i className="fab fa-twitter"></i>;
            default:
                return null;
        }
    }
    return (
        <div className={styles["container-card"]}>
            <div>
                {getIcon(item.social)}
                <p>{item.text}</p>
                <a href={item.url} target="_blank">{item.url}</a>
            </div>
            <Status status={item.status} />
        </div>
    )
}


const Status = ({ status }) => {
    const getColorStatus = () => {
        switch (status) {
            case "Verdadero":
                return "#8BD693";
            case "Falso":
                return "#E69494";
            case "Inconcluso":
                return "#B9B9B9";
            default:
                return "#B9B9B9";
        }
    }
    return (
        <div style={{
            background: getColorStatus(),
            alignSelf: "center",
            padding: "10px 15px",
            borderRadius: 30,
            color: "white",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            width: "300px",
            marginLeft: "20px",
        }}>
            {status.toUpperCase()}
        </div>
    )
}



export default NewItem
