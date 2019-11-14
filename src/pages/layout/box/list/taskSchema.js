import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../../../actions/taskActions';
import TextInput from '../../../../components/TextInput';
import DoneButton from './taskSchema/DoneButton';
import EditButton from './taskSchema/EditButton';

const mapDispatchToProps = dispatch => {
    return {
        updateTask : task => dispatch(updateTask(task))
    };
};
class TaskSchema extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        });
    };

    handleBlur() {
        const { task } = this.props;

        if (task.title !== this.state.title) {
            task.title = this.state.title;
            this.props.updateTask(task);
        }
    }
    
    componentDidMount() {
        const { task } = this.props;

        if (task) {
            this.setState(task);
        }
    }

    render() {

        const { task } = this.props;

        return (
            <div className="box" key={task._id}>
                <div className="columns is-mobile is-vcentered">

                    <div className="column is-1">
                        <DoneButton  task={task} /> 
                    </div>
            
                    <div className="column is-8">
                        <TextInput id={task._id}
                            name={'title'}
                            value={this.state.title}
                            className="is-shadowless"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur} />
                    </div>

                    <div className="column is-2 is-centered" >
                        <EditButton _id={task._id} />
                    </div>

                </div>
             </div>    
        )
    }
}

export default connect(null, mapDispatchToProps)(TaskSchema);;