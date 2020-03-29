import React from 'react';

const context = (props) => {
    return (
        <div className="context clearfix">{props.children}</div>
    );
};

export default context;
