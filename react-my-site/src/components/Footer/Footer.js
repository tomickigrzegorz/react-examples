import React from 'react';

import styles from './Footer.css';

const footer = (props) => {
    const getFullYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>Strona używa plików cookies. Brak zmiany ustawień przeglądarki oznacza zgodę na ich użycie.</p>
            <div className={styles.copyright}>Copyright &copy; <span>{getFullYear}</span> by <a href="//kody.wig.pl" target="_blank" rel="noopener noreferrer">kody.wig.pl</a></div>
        </footer>
    );
};

export default footer;