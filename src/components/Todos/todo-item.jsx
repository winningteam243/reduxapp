import React from 'react'
// import { connect } from 'react-redux'

 const TodoItem =(props)=>  {
    // handleDelete = () => {
    //    this.props.deletetodo(this.props.todo.id)
    // }
    return (
      <div className="item" >
      <button className="ui basic red button" 
      onClick={()=>props.deleteTodo(props.todo.id)}
       > Delete</button>
         {
             props.todo.text
         }
      </div>
    )

}

// const mapDispatchTpProps=(dispatch)=>{
//     return {
//         deletetodo:(id)=>{
//             dispatch({ type: 'DELETE_TODO', payload: id })
//         }
//     }
// }

// export default connect(null,mapDispatchTpProps)(TodoItem)
export default TodoItem;