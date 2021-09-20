import React, { useState } from 'react';
import Styles from '../styles/Home.module.scss'
import ToDoList from '../pages/components/todolist';
import data from "../pages/dummy.data/data.json"

export default function Home() {
  const [ toDoList, setToDoList ] = useState(data);
  const[update, setUpdate] = useState({id:null, status:false});
  const [ form, setForm ] = useState({
    title :"",
    quantity:"",
    price:"",
    status:"",
  });


  function handleChange(e){
    let data = {...form};
    data[e.target.name]= e.target.value;
    setForm(data);
  }  
  
function handleSubmit(e) {
  e.preventDefault();
  let data = [...toDoList];

  if(form.title===""){
    return false;
  }
  if(form.quantity===""){
    return false;
  }
  if(form.price===""){
    return false;
  }

  //pengecekan
  if(update.status){
    data.forEach((todo)=>{
      if (todo.id === update.id){
        todo.title = form.title;
        todo.quantity = form.quantity;
        todo.price = form.price;
      }
    });
  }else{
    //menambah data
    data.push({id:toDoList.length+ 1 , title:form.title, quantity:form.quantity, price:form.price});
  }
   setToDoList(data);
   setForm({title:"", price: "", quantity:""});
  }

  
  const handleEdit = (todo) => {
    setForm({
      title: todo.title,
      quantity: todo.quantity,
      price: todo.price,
    });
    setUpdate({ id: todo.id, status: true });
    console.log(todo);
  };


  const handleDelete = (todo) => {
    let filtered = toDoList.filter((toDoList) => toDoList !== todo);
    setToDoList(filtered);
    console.log(filtered);
  };
  
    
  return (
    <div className='container'>
      <div className={Styles.section}>
        <form onSubmit={handleSubmit}>
        <input name="title" value={form.title}  type="text" onChange={handleChange} placeholder="title"/><br/>
        <input type="number" value={form.quantity} name="quantity" onChange={handleChange} placeholder="quantity"/><br/>
        <input name="price" value={form.price} type="text" onChange={handleChange} placeholder="price"/><br/>
        <input className={Styles.button} type="button" onClick={handleSubmit} placeholder="tambah" value="tambah"/>
        </form>
      </div>
      <h2>List</h2>      
       <ToDoList toDoList={toDoList}
       handleEdit={handleEdit}
       handleDelete={handleDelete}
       />
       

    </div>

   )
 }