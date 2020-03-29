import React from 'react';
import styles from './Logo.module.scss';
import Logo from './logo.svg';

const logo = () => {
    return (
        <div className={styles.logo}>
            <img src={Logo} alt="logo" />
        </div>
    );
};

export default logo;