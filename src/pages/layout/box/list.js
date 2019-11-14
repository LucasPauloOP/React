import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { getAllTasks } from '../../../actions/taskActions';
import TaskSchema from './list/taskSchema';
import MenuTab from '../../layout/box/list/menuTab';
import CreateButton from './list/createButton';

const mapDispatchToProps = dispatch => {
    return {
        getAllTasks: () => dispatch(getAllTasks())
    }
}

const mapStateToProps = state =>{
    return {tasks: state.tasks,  filterCompleted: state.filterCompleted}
}
class List extends Component {
    componentDidMount() {
        this.props.getAllTasks();
    }
    render () {
        let { tasks,filterCompleted } = this.props;
        let taskListComponent = '';
        tasks = tasks.filter(task => task.completed === filterCompleted);

        if (!tasks.length) {
            taskListComponent =
                <Fragment>
                    <div className="box">
                        <h1>There's no task created</h1>
                    </div>
                </Fragment>
        } else {
            taskListComponent =
            <Fragment>
                {tasks.map(task => (
                    <TaskSchema task={task} key={task._id} />
                ))}
            </Fragment>
        }

        return (
            <div>
            <CreateButton />
            <MenuTab />
            <div className="is-task-list">
                {taskListComponent}
            </div>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);