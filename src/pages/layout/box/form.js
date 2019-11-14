/* eslint-disable react/no-direct-mutation-state */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../../../actions/taskActions';

// Components
import Inputs from './form/input';
import Buttons from './form/button';

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
};

// Redux state to component props
// const mapStateToProps = state => {
//     return {
//       task: state.taskReducer.task
//     };
//   };

class Form extends Component {
    constructor() {
        super();

        this.state = {
            _id: '',
            title: '',
            details: '',
            remember_me_date: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // Gets the id that is passed in url /:id
        const { id } = this.props.match.params;
        const { task } = this.props;
    
        // If it's passed an Id
        if (id) {
          // If there's already a task in redux store and it's equal to the id passed
          if (task && task._id === id) {
            this.fillInputWithTask(task);
          } else {
            // Otherwise, get the task from db
            this.props.getTaskById(id);
          }
        }
      }

      componentDidUpdate() {
        const { id } = this.props.match.params;
        const { task } = this.props;
    
        // If it's passed an Id
        if (id) {
          // If there's already a task in redux store and state still without it
          if (task && task._id === id && this.state._id === '') {
            this.fillInputWithTask(task);
          }
        }
      }
    // Updates a task if there's an Id passed
    // Creates a task if wasn't passed and Id
    handleSubmit(event) {
        event.preventDefault();
    
        if (this.state._id) {
          this.props.updateTask(this.state);
        } else {
          this.props.addTask(this.state);
        }
    
        // redirect to home page
        this.props.history.push('/');
      }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        let { id } = this.props.match.params;
        if (id === undefined) {
            id = null;
          }
        return (
            
            <Fragment>
                <h1 className="title has-text-grey-dark">
                    Create Task
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <Inputs state={this.state} onChange={this.handleChange} />
                    <Buttons />
                </form>
            </Fragment>
        );
    }
}

export default 
    connect(mapDispatchToProps)(Form);