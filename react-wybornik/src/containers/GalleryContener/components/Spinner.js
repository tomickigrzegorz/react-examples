import React from 'react';
import classes from './Spinner.module.scss';

const spinner = () => (
    <div className={classes.LoaderContent}>
        <div className={classes.loader}>Loading...</div>
    </div>
);

export default spinner;