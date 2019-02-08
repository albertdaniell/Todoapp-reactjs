import React, { Component } from 'react';



class Addtodo extends Component {

 state={
    content:null
 }

handleOnChangeValue =(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  });



};

 handleAddtodo =(e) =>{
     
    
     e.preventDefault();
     this.props.addTodo(this.state);

 };

  

   render(){

    const {addTodo}=this.props;
    return (
       <div className="row">
           <div className="col s12">
               <div className="row">
            <form action="" onSubmit={this.handleAddtodo}>

            <div className="input-field col s12">
          <input id="content" type="text" className="validate" onChange={this.handleOnChangeValue}/>
          <label htmlFor="last_name">Add to do</label>
        </div>
            </form>
               </div>
           </div>
       </div>
       );
   }

}

export default Addtodo;
