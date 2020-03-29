import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/acyncComponent/acyncComponent';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

const asyncAbout = asyncComponent(() => {
    return import('./containers/About/About');
});

const asyncContact = asyncComponent(() => {
    return import('./containers/Contact/Contact');
});

class App extends Component {

    render() {
        let routers = (
            <Switch>
                <Route path="/kontakt" component={asyncContact}/>
                <Route path="/o-mnie" component={asyncAbout}/>
                <Route path="/" exact component={Home}/>
                <Redirect to="/"/>
            </Switch>
        );
        return (
            <div className="container">
                <Layout>
                    {routers}
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);
