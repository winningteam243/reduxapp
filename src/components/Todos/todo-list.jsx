import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './todo-item'
import TodoForm from './todo-form'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.deleteTodo = this.deleteTodo.bind(this);

        
    }
    deleteTodo(id){
        console.log('In the parent', id);
        this.props.onDeleteTodo(id)
    }
    render() {
        return (
            <div>
                <h3>ToDo List </h3>
                <TodoForm />

                <div className="ui selection aligned list">
                    {this.props.Todos.map(todo => <TodoItem 
                                                        key={todo.id} 
                                                        todo={todo} 
                                                        deleteTodo={this.deleteTodo}/>
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onDeleteTodo : (id) => {
                console.log('select id is', id)
                dispatch({ type: 'DELETE_TODO', payload: id })
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps )(TodoList);