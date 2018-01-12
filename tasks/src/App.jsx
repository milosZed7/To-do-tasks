import React from 'react';
import ColumnList from './ColumnList';
import ItemContainerList from './ItemContainerList';
const App = () => {
    return (
        <div className="app-container">
            <ColumnList />
            <ItemContainerList />
        </div>
    );
};

export default App;
