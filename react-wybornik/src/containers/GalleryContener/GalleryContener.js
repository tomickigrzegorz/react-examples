import React from 'react';
import classes from '../../assets/scss/index.module.scss';
import BigImage from './components/BigImage';
import GalleryList from './components/GalleryList';

const GalleryContener = () => {
    return (
        <main className={classes.content}>
            <div className={classes.row}>
                <GalleryList />
                <BigImage />
            </div>
        </main>
    )
}

export default GalleryContener;