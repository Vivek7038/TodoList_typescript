import { useState } from 'react'
import './App.css'
import InputField from "./components/InputField.tsx"
import { Todo } from './model.ts';
import Todolist from "./components/Todolist.tsx"

 const  App:React.FC =()=>{
 const [todo ,setTodo]= useState<string>("");
 const [todos , setTodos]= useState<Todo[]>([])
 const handleAdd=(e:React.FormEvent)=>{
   e.preventDefault();
   if(todo){
    setTodos([...todos , {id:Date.now()  , todo:todo , isDone:false}])
    setTodo("")
  }
}
  return (
    <>
     <div className="App">
      <div className="span heading">Taskify</div>
    <InputField todo={todo}  setTodo={setTodo} handleAdd={handleAdd}/>
   <Todolist todos={todos} setTodos={setTodos}/>
     </div>
    </>
  )
}

export default App
