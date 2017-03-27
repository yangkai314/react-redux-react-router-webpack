/**
 * Created by dell on 2017/3/21.
 */
import {VisibilityFilters,ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER} from './actions'
import { combineReducers } from 'redux';


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  counter
});

export default todoApp