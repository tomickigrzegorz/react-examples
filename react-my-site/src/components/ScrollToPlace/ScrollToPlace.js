import React, { Component, Fragment } from 'react';
// import { withRouter } from 'react-router';

import PropTypes from 'prop-types';

import styles from './ScrollToPlace.css';

class ScrollToPlace extends Component {
    state = {
        scrolling: '',
        scrollPosHeight: 200,
        width: 0,
        height: 0,
        documentHeight: 0,
        showElement: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideShowButtonTop);
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.hideShowButtonTop);
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    hideShowButtonTop = () => {
        const fromPlace = this.props.from;
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        if(fromPlace === 'back__to__top' && (scrollPos > this.state.scrollPosHeight && scrollPos !== 0)) {
            this.setState({ showElement: true })
        } else {
            this.setState({ showElement: false })
        }
    }

    updateWindowDimensions = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            documentHeight: document.body.clientHeight
        });
    }

    scrollToTop = () => {
        let { to } = this.props;
        const place = document.querySelector((to === 'header' ? 'header' : `.${to}`));
        place.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        let divPlace = '';
        const { width, height, documentHeight, showElement } = this.state;

        if (this.props.from === 'scroll__btn' && (width > 1200) && (height < documentHeight)) {
            divPlace = (
                <span onClick={this.scrollToTop} className={styles.scroll__btn}>
                    <span className={styles.mouse}>
                        <span></span>
                    </span>
                    <p>scroll me</p>
                </span>
            )
        }

        if (showElement) {
            let classname = this.props.from;
            divPlace = (
                <div onClick={this.scrollToTop} className={styles[classname]}></div>
            )
        }

        return (
            <Fragment>{divPlace}</Fragment>
        )
    };
};

ScrollToPlace.propTypes = {
    scrollTop: PropTypes.func
}

export default ScrollToPlace;