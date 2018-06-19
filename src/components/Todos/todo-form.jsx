import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { connect } from 'react-redux';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field" >
                    <label>Enter todo text</label>
                    <input type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button type="submit"
                        className="ui button primary blue"
                        value="Submit">Add Todo</button>
                </div>
            </form>
        )
    }
}

const mapDispatchTpProps = (dispatch) => {
    return {
        addTodo: (todoText) => {
            console.log('dispacthed value', todoText)
            dispatch({ type: 'ADD_TODO', payload: todoText })
        }
    }
}
export default connect(null, mapDispatchTpProps)(TodoForm)