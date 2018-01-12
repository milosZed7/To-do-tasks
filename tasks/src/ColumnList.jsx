import React from 'react';
import ColumnHeader from './ColumnHeader';

const ColumnList = props => {
    return (
        <div className="column-list">
            <div>
                <ColumnHeader title="TO DO" />
            </div>
            <div>
                <ColumnHeader title="IN PROGRESS" />
            </div>
            <div>
                <ColumnHeader title="DONE" />
            </div>
        </div>
    );
};

export default ColumnList;
