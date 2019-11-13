import React, {Component} from 'react';
import TaskSchema from './list/taskSchema';

class List extends Component {
    render () {
        return (
            <div >
               <TaskSchema />
            </div>
        )
    }
}

export default List;