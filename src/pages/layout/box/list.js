import React, {Component} from 'react';
import TaskSchema from './list/taskSchema';
import MenuTab from '../../layout/box/list/menuTab';
import CreateButton from './list/createButton';
class List extends Component {
    render () {
        return (
            <div>
                <CreateButton />
                <MenuTab />
                <div >
                    <div>
                        <TaskSchema />
                    </div>
                </div>
            </div>
        )
    }
}

export default List;