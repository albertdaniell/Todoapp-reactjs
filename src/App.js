import React, { Component } from 'react';
import Todos from './Todos'
import Addtodo from './Addtodo'

class App extends Component {

  state={



    todos:[
      {
    id:1,content:'play music'

      },
      {
        id:2,content:'buy chocolate'
      }
    ]


  }


  deleteTodo =(id) =>{
   const todos = this.state.todos.filter(todo=>{
     return todo.id !==id
   });
   this.setState({
     todos:todos
   })
  }

  addTodo =(mytodoitem)=>{
    mytodoitem.id=Math.random();
    let todos =[...this.state.todos, mytodoitem];

    this.setState({
      todos:todos
    })
console.log(mytodoitem);
  }

  render() {
    return (
      <div className="todo-app container">
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
