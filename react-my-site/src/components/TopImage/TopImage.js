import React, { Component } from 'react';
import ScrollToPlace from '../ScrollToPlace/ScrollToPlace';
import styles from './TopIimage.css';

export class TopImage extends Component {
    render() {
        const source = require(`../../assets/images/head/${this.props.paralax}`)
        return (
            <div className={styles.paralax__place}>
                <div className={styles.parallax__thumbnail} style={{ backgroundImage: `url(${source})` }}></div>
                <ScrollToPlace from="scroll__btn" to="context" />
            </div>
        )
    }
};

export default TopImage;