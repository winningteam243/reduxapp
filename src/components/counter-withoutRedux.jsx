import React, { Component } from 'react'

 class Counters extends Component {
state  = {
    count: 0
}
increment = () => {
    this.setState({
        count: this.state.count + 1
    });  
}
decrement = () => {
    this.setState({
        count: this.state.count -1 
    })
}
     
  render() {
    return (
      <div>
         <button onClick = {this.increment} >+</button>
         <span>{this.state.count}</span>
         <button onClick = {this.decrement} >-</button>
      </div>
    )
  }
}

export default Counters;