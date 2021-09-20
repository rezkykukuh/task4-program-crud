
import ToDo from './todo';
import React, { useState } from "react";
 
const ToDoList = (props) => {
    const { toDoList, handleEdit, handleDelete } = props;
    const [search, setSearch]= useState("");

    const handleChange =(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
       <div className="container">
           <div className="search">
               <input
               name={search} 
               type ="text"
               placeholder="pencarian"
               onChange={handleChange}
               value={search}
               classname="search"/>
           </div>    
           {toDoList.filter((todo)=>{
               if(search===""){
                   return todo;
               }else if(
                todo.title.toLowerCase().includes(search.toLowerCase())
               ){
                   return todo;
               }
           }).map(todo => {
               return (
                   <ToDo 
                   todo={todo} 
                   handleEdit={handleEdit}
                   handleDelete={handleDelete}
                   key={todo.id}
                    />
               );
               })}
               
       </div>
   );
};
 
export default ToDoList;