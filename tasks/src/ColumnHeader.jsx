import React from 'react';

const ColumnHeader = props => {
    return (
        <div className="header-block">
            <h1>{props.title}</h1>
        </div>
    );
};

export default ColumnHeader;
