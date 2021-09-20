import React from 'react';

 
const ToDo = (props) => {
    const { todo, handleEdit, handleDelete } = props;
   return (
       <div className="todo">
           <div className="todo-kiri">
           <a>{todo.title}</a><br/>
           {todo.quantity}<br/>
           {todo.price}
           </div>
           <div className="todo-kanan">
            <button className="edit" onClick={()=> handleEdit(todo)} >Edit</button>
            <button className="delete" onClick={()=> handleDelete(todo)} >Delete</button>
       </div> 
       </div>
   );
};
 
export default ToDo;