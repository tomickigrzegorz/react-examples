import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import logoSite from 'assets/images/logo.svg';
import styles from './Logo.css';

class Logo extends Component {

    render() {
        const location = window.location.pathname;
        const logo = <img src={logoSite} alt="Moje logo" className={`img-responsive ${styles.logo}`} />;

        let logoPlace = (location !== '/') ? <NavLink to="/">{logo}</NavLink> : logo;

        return (
            <Fragment>
                <div className={`navbar__section ${styles.logo__svg}`} id='logo'>
                    {logoPlace}
                </div>
            </Fragment>
        )
    }
};

export default Logo;