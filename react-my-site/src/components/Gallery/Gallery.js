import React from 'react';

import styles from './Gallery.css';

const gallery = (props) => {
    const { thumbnail, name, type, clicked } = props;
    const zoomIn = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M51.6 57.28c-5.361 4.196-12.2 6.729-19.631 6.729-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32 0 7.431-2.533 14.27-6.782 19.701l.053-.07 21.4 21.32-5.68 5.68-21.32-21.36zM32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24zm-4-28v-8h8v8h8v8h-8v8h-8v-8h-8v-8h8z" /></svg>
    )
    return (
        <div className={styles.grid}>
            <figure className={styles.effect__goliath}>
                <img src={thumbnail} alt={name} />
                <figcaption>
                    <h2>{type}</h2>
                    <p>{name}</p>
                    <div onClick={clicked} className={styles.zoom}>{zoomIn}</div>
                </figcaption>
            </figure>
        </div>
    );
}

export default gallery;