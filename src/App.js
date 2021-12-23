import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { About } from './MyComponents/About';
import { AddTodo } from './MyComponents/AddTodo';
import React,{useState,useEffect} from 'react';

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) =>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
  
    let sno;
    todos.length ===0 ? sno = 1 : sno = todos[todos.length-1].sno+1;
    const newTodo ={
      sno:sno,
      title:title,
      describe:desc
    }

    setTodos([...todos,newTodo]);

  }

  const[todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
