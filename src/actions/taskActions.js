import {ADD_TASK, GET_TASKS, UPDATE_TASK, FILTER_COMPLETED_TASKS} from './actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/tasks';

export function addTask({ title, details, conclusion_date, remember_me_date }) {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, { title, details, conclusion_date, remember_me_date })
            .then(res => {
                dispatch(addTaskSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
};

export function addTaskSuccess(task) {
    return {
        type: ADD_TASK,
        payload: {
            task
        }
    };
};

export function getAllTasks() {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(res => {
                dispatch(getAllTasksSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
};

export function getAllTasksSuccess(tasks) {
    return {
        type: GET_TASKS,
        payload: {
            tasks
        }
    };
};

export function updateTask({ _id, title, completed, details, conclusion_date, remember_me_date }) {
    return (dispatch) => {
      return axios.put(`${apiUrl}/${_id}`, { _id, title, completed, details, conclusion_date, remember_me_date })
        .then(res => {
            dispatch(updateTaskSuccess(res.data));
        })
        .catch(err => {
            throw (err);
        });
    };
  };
  
  export function updateTaskSuccess(data) {
    return {
        type: UPDATE_TASK,
        payload: {
            _id: data._id,
            title: data.title,
            details: data.details,
            conclusion_date: data.conclusion_date,
            remember_me_date: data.remember_me_date,
        }
    };
  };

  export function filterCompletedTasks(active) {
    return {
        type: FILTER_COMPLETED_TASKS,
        payload: {
            active
        }
    }
}