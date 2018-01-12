import React from 'react';
import ItemConainer from './ItemContainer';

const ItemContainerWithInput = props => {
    return (
        <div>
            <form onSubmit={props.submitTask}>
                <input
                    type="text"
                    name="task"
                    value={props.toDoTask}
                    onChange={props.handleTask}
                    className="item-input"
                    placeholder="Enter task to do"
                />
            </form>
            <ItemConainer
                list={props.toDoList}
                allowDrop={props.allowDrop}
                leaveContainer={props.leaveContainer}
                drag={props.drag}
                drop={props.drop}
                name={props.name}
                onDragClass={props.onDragClass}
                moveElClass={props.moveElClass}
                draggedTask={props.draggedTask}
                endDrag={props.endDrag}
                itemBackColor={props.itemBackColor}
                onDragEnter={props.onDragEnter}
                leaveItem={props.leaveItem}
            />
        </div>
    );
};

export default ItemContainerWithInput;
