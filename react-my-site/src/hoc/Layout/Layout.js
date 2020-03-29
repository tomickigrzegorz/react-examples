import React, { Component, Fragment } from 'react';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import ShareIcon from '../../components/ShareButton/ShareButton';
import ScrollToPlace from '../../components/ScrollToPlace/ScrollToPlace';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
                <ScrollToPlace from="back__to__top" to="header" />
                <ShareIcon />
            </Fragment>
        );
    }
}

export default Layout;