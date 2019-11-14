import React, {Component} from 'react';
import TaskSchema from './list/taskSchema';

class List extends Component {
    render () {
        return (
            <div>
                <div className="is-task-list">
                    <div>
                        <TaskSchema />
                    </div>
                </div>
            </div>
        )
    }
}

export default List;