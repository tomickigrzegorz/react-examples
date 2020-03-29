import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.css';

const navigationItems = () => (
    <div className={`${styles.navbar__section} ${styles.nav__link}`}>
        <NavigationItem link="/" exact>HOME</NavigationItem>
        <NavigationItem link="/o-mnie">O MNIE</NavigationItem>
        <NavigationItem link="/kontakt">KONTAKT</NavigationItem>
        <a ria-current="false" href="http://blog.grzegorztomicki.pl" target="_blank" rel="noopener noreferrer">BLOG</a>
    </div>
);

export default navigationItems;