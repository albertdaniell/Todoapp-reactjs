import React, { Component } from 'react';



class Todos extends Component {

 

  state={
  }
  render() {

    const {deleteTodo} =this.props;
    const {todos} = this.props;

    const todosList = todos.length ?(

      todos.map(todo => {
        return (

          <div className="collection-item" key={todo.id}>
          <span className="myitems" onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
          </div>

        );
      })
    ):(

      <p className="center">YOU HAVE NO TODOS LEFT</p>
    )


    return (
     <div>
     <h3 className="center blue-text">Todos Component</h3>

     <div className="collection">
      {todosList}
      </div>
     </div>
    );
  }
}

export default Todos;
