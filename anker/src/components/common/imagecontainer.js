
import React from 'react';
import styles from './imagecontainer.module.css'


const ImageContainer = ({ title, subtitle, description }) => {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <p>{title}</p>
                <p style={{ fontSize: "25px" }}><b>{subtitle}</b></p>
                <p style={{ fontSize: "13px" }}>{description}</p>
            </div>
        </div>
    );
};

export default ImageContainer;
