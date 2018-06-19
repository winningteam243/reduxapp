const initialState = [
    {
      id: 1,
      text: 'Learn React',
      completed: false
    },
    {
      id: 2,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 3,
      text: 'Go to Goa',
      completed: false
    }
  ];
  
  let latestId = 3;
  
  export function todosReducer(state = initialState, action) {
    switch(action.type) {
      case 'ADD_TODO':
        const newTodo = { id: ++latestId, text: action.payload, completed: false };
        return [...state, newTodo];
      case 'DELETE_TODO':
      // console.log()
      return state.filter(todo => todo.id !==  action.payload);
      // return todo
      default:
        return state;
    }
  }