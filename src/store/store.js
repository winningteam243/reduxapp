// import { createStore } from 'redux';
// const intialState = {
//     counter: 844,
//     todos: [
//         {id: 1, text:"React Js", completed: false},
//         {id: 2, text:"React And Redux", completed: false},
//         {id: 3, text:"Angular 2", completed: false},
//     ]
// }
// let latestId = 3;
// const counterReducer = (count = intialState, action) => {
//     switch (action.type) {
//         case 'INC':
//             return { ...count, counter: count.counter + 1 + action.payload };
//         case 'DEC':
//             return { ...count, counter: count.counter - 1 }
//         default:
//             return count;
//     }
// }
// export function todosReducer(state = intialState, action) {
//     switch(action.type) {
//       case 'ADD_TODO':
//         const newTodo = { id: ++latestId, text: action.payload, completed: false };
//         return [...state, newTodo];
//       default:
//         return state;
//     }
//   }
// const store = createStore(counterReducer)
// export default store;


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;