import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
    // increment = () => {
    //     this.props.dispatch({type: 'INC', payload:10})
    // }
    // decrement = () => {
    //     this.props.dispatch({type: 'DEC'}) 
    // }
    
    render() {
        return (
            <div>

                <button className="ui primary button " onClick={this.props.increment}><i className="plus icon"></i></button>
                <span>  {this.props.count}   </span>
                <button className="ui primary button " onClick={this.props.decrement}><i className="minus icon"></i></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: function () {
            dispatch({ type: 'INC', payload: 1 })
        },
        decrement: function () {
            dispatch({ type: 'DEC', payload: 1 })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);