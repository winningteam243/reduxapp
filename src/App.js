import React, { Component } from 'react';
import Counter from './components/counter';
// import Counters from './components/counter-withoutRedux'
import './App.css';
import TodoList from './components/Todos/todo-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3> react-redux
        </h3>
        <Counter  />
        <br/>
       <TodoList/>
      </div>
    );
  }
}

export default App;
