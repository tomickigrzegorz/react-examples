import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveClassName = {
    borderBottom: '2px solid',
    fontWeight: 500,
    color: '#00CDF2',
    textDecoration: 'none'
};

const navigationItem = (props) => {
    const { link, exact, children } = props;
    return (
        <NavLink
            to={link}
            exact={exact}
            activeStyle={ActiveClassName}
        >{children}
        </NavLink>
    );
};

export default navigationItem;