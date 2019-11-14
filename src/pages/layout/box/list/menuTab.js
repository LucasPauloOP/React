import React from 'react';
import { connect } from 'react-redux';
import { filterCompletedTasks } from '../../../../actions/taskActions';
import Tab from './menuTab/tab';

const mapStateToProps = state => {
    return { tasks: state.tasks,filterCompletedTasks: state.filterCompletedTasks }
};

const mapDispatchToProps = dispatch => {
    return {
        applyFilter: (active) => dispatch(filterCompletedTasks(active))
    }
};

const MenuTab = ({ tasks, filterCompleted, applyFilter }) =>{
    const numberofCompletedTasks = tasks.filter(task=> task.completed).length;
    return (
        <div className="tabs is-fullwidth has-text-weight-bold">
            <ul>
                <Tab text="Incomplete" 
                quantity={(tasks.length - numberofCompletedTasks)} 
                className={filterCompleted ? '' : 'is-active'} 
                onClick={() => applyFilter(false)} />

                <Tab  text="Completed"
                    quantity={numberofCompletedTasks}
                    className={filterCompleted ? 'is-active' : ''}
                    onClick={() => applyFilter(true)} />
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTab);;