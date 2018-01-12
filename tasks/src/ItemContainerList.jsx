import React from 'react';
import ItemConainer from './ItemContainer';
import ItemContainerWithInput from './ItemContainerWithInput';

class ItemContainerList extends React.Component {
    state = {
        draggedContainer: '',
        draggedTask: '',
        toDoTask: '',
        toDoList: ['to do first', 'to do task 1'],
        inProgressList: ['task one progress', 'task two progress'],
        doneList: ['done task 1', 'done task 2', 'done task 3', 'done task 4'],
        dragOverContainer: '',
        dragOverClass: '',
        movingElementClass: ''
    };

    handleTask = event => {
        this.setState({
            toDoTask: event.target.value
        });
    };

    submitTask = event => {
        event.preventDefault();
        this.setState(prevState => ({
            toDoTask: '',
            toDoList: prevState.toDoList.concat(this.state.toDoTask)
        }));
    };
    allowDrop = (evt, containerName) => {
        if (containerName !== this.state.draggedContainer) {
            evt.preventDefault();
            this.setState({
                dragOverContainer: containerName
            });
        }
    };

    makeRoomForNewItem = (containerName, index) => {
        if (containerName !== this.state.draggedContainer) {
            const newStateArray = this.state[containerName].slice();
            newStateArray.splice(index, 0, 'new task');
            this.setState({
                [containerName]: newStateArray
            });
        }
    };

    leaveContainr = () => {
        this.setState({
            dragOverContainer: ''
        });
    };

    leaveItem = (containerName, index) => {
        if (containerName !== this.state.draggedContainer) {
            this.setState({
                [containerName]: this.state[containerName].filter((task, taskIndex) => taskIndex !== index)
            });
        }
    };

    endDrag = () => {
        this.setState({
            movingElementClass: ''
        });
    };
    drop = containerName => {
        const { draggedContainer, draggedTask } = this.state;
        const newArray = this.state[containerName].slice();
        const indexOfDroppedElem = newArray.findIndex(elem => elem === 'new task');
        newArray.splice(indexOfDroppedElem, 1, draggedTask);
        if (containerName !== draggedContainer) {
            this.setState({
                [draggedContainer]: this.state[draggedContainer].filter(task => task !== draggedTask),
                [containerName]: indexOfDroppedElem === -1 ? this.state[containerName].concat(draggedTask) : newArray,
                dragOverContainer: '',
                movingElementClass: ''
            });
        }
    };
    drag = (containerName, task) => {
        this.setState({
            draggedContainer: containerName,
            draggedTask: task,
            movingElementClass: 'list-item-remove'
        });
    };
    render() {
        return (
            <div className="item-container-list">
                <ItemContainerWithInput
                    handleTask={this.handleTask}
                    submitTask={this.submitTask}
                    toDoList={this.state.toDoList}
                    toDoTask={this.state.toDoTask}
                    allowDrop={this.allowDrop}
                    leaveContainer={this.leaveContainr}
                    drag={this.drag}
                    drop={this.drop}
                    name="toDoList"
                    onDragClass={this.state.dragOverContainer === 'toDoList' ? 'on-drag-over' : ''}
                    moveElClass={this.state.movingElementClass}
                    draggedTask={this.state.draggedTask}
                    endDrag={this.endDrag}
                    itemBackColor="list-item-to-do"
                    onDragEnter={this.makeRoomForNewItem}
                    leaveItem={this.leaveItem}
                />
                <ItemConainer
                    list={this.state.inProgressList}
                    allowDrop={this.allowDrop}
                    leaveContainer={this.leaveContainr}
                    drag={this.drag}
                    drop={this.drop}
                    name="inProgressList"
                    onDragClass={this.state.dragOverContainer === 'inProgressList' ? 'on-drag-over' : ''}
                    moveElClass={this.state.movingElementClass}
                    draggedTask={this.state.draggedTask}
                    endDrag={this.endDrag}
                    itemBackColor="list-item-in-progress"
                    onDragEnter={this.makeRoomForNewItem}
                    leaveItem={this.leaveItem}
                />
                <ItemConainer
                    list={this.state.doneList}
                    allowDrop={this.allowDrop}
                    leaveContainer={this.leaveContainr}
                    drag={this.drag}
                    drop={this.drop}
                    name="doneList"
                    onDragClass={this.state.dragOverContainer === 'doneList' ? 'on-drag-over' : ''}
                    moveElClass={this.state.movingElementClass}
                    draggedTask={this.state.draggedTask}
                    endDrag={this.endDrag}
                    itemBackColor="list-item-done"
                    onDragEnter={this.makeRoomForNewItem}
                    leaveItem={this.leaveItem}
                />
            </div>
        );
    }
}

export default ItemContainerList;

// getClassForHoverContainer(containerName) {
//     switch (containerName) {
//         case 'toDoList':
//             return {
//                 dragOverToDoClass: 'on-drag-over',
//                 dragOverInProggresClass: '',
//                 dragOverDoneClass: ''
//             };
//         case 'inProgressList':
//             return {
//                 dragOverToDoClass: '',
//                 dragOverInProggresClass: 'on-drag-over',
//                 dragOverDoneClass: ''
//             };
//         case 'doneList':
//             return {
//                 dragOverToDoClass: '',
//                 dragOverInProggresClass: '',
//                 dragOverDoneClass: 'on-drag-over'
//             };
//         default:
//             return {};
//     }
// }
