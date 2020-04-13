import React,{useState} from 'react'
import NewToDo from './NewToDo'
import ToDoList from './ToDoList'

 function App() {
  const [toDolist, setToDolist] = useState([
    //{text:"task1", iscompleted: false , id:"ts1" },
    //{text:"task2", iscompleted: false , id:"ts2" },
    //{text:"task3", iscompleted: false , id:"ts3" },
  ])
  const Additemparent =(newtask)=>{
    setToDolist([...toDolist,newtask])
  }
  const Deleteitemparent = (id)=>{
    setToDolist(toDolist.filter((element)=> element.id !==id))
  }
  const Completeitemparent = (id)=>{
    setToDolist(toDolist.map(element =>(id===element.id)?({...element,iscompleted:!element.iscompleted}):element))
  }
  
  return (
    <div>
      <NewToDo additem={Additemparent}/>
      <ToDoList itemlist={toDolist} deleteitem={Deleteitemparent} completeitem={Completeitemparent}/>
    </div>
  )
}
export default App
