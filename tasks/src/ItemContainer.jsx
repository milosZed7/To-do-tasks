import React from 'react';
import Item from './Item';

const ItemContainer = props => {
    let containerClass = 'item-container';
    if (props.onDragClass) {
        containerClass = `${containerClass} ${props.onDragClass}`;
    }

    const mapTaskToItem = (task, index) => {
        return (
            <Item
                key={index}
                item={task !== 'new task' ? task : 'Drop here'}
                onDragStart={() => props.drag(props.name, task)}
                moveClass={task === props.draggedTask ? props.moveElClass : ''}
                endDrag={props.endDrag}
                backColor={props.itemBackColor}
                onDragEnter={() => props.onDragEnter(props.name, index)}
                leaveItem={() => props.leaveItem(props.name, index)}
                newTaskClass={task === 'new task' ? 'new-task-placeholder' : ''}
            />
        );
    };

    return (
        <div>
            <div
                className={containerClass}
                onDragLeave={props.leaveContainer}
                onDragOver={evt => props.allowDrop(evt, props.name)}
                onDrop={evt => {
                    evt.preventDefault();
                    props.drop(props.name);
                }}
            >
                {props.list.length !== 0 ? props.list.map(mapTaskToItem) : <div className="no-items-in-list">No Items</div>}
            </div>
        </div>
    );
};

export default ItemContainer;
