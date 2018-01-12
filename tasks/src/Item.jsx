import React from 'react';

const Item = props => {
    return (
        <div
            className={`list-item ${props.backColor} ${props.moveClass} ${props.newTaskClass}`}
            draggable
            onDragStart={props.onDragStart}
            onDragEnd={props.endDrag}
            onDragEnter={props.onDragEnter}
            onDragLeave={props.leaveItem}
        >
            {props.item}
        </div>
    );
};

export default Item;
