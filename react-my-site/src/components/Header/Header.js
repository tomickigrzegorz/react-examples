import React from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation/NavigationItems/NavigationItems'
import styles from './Header.css';

const Header = () => {
    return (
        <header className={styles.navbarTop}>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;