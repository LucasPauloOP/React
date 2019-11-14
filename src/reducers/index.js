import { ADD_TASK, GET_TASKS, UPDATE_TASK, FILTER_COMPLETED_TASKS } from "../actions/actionTypes";

const initialState = {
    tasks: [],
    filterCompleted: false  
}

function rootReducer(state = initialState, action) {
    if(action.type === ADD_TASK){
        return {
            ...state,
            tasks: [...state.tasks, action.playload]
        }
    }

    if (action.type === GET_TASKS) {
        return {
            ...state,
            tasks: [...action.payload.tasks]
        }
    }

    if (action.type === UPDATE_TASK) {
        const updatedTasks = state.tasks.map(task => {
            if (task._id === action.payload._id) {
                return { ...task, ...action.payload }
            }
            return task;
        });
    
        return {
            ...state,
            tasks: [...updatedTasks],
        };
    }

    if (action.type === FILTER_COMPLETED_TASKS) {
        return {
            ...state,
            filterCompleted: action.payload.active
        }
    }

    return state;
};

export default rootReducer;