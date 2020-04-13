import React from 'react'

 function ToDoList(props) {
     
    return (
        
        <div> 

               <section>
                   <h2>Lest's get some work done</h2>
                   {props.itemlist.map((list)=>
                   <ul key={list.id}>
                   <li style={{textDecoration:(list.iscompleted)&&"line-through"}}>{list.text}
                   <ul>
                      <button onClick={()=>props.deleteitem(list.id)}>Delete</button>
                      <button onClick={()=>props.completeitem(list.id)}>{(!list.iscompleted)?"complete":"UNDO"}</button>
                   </ul>
                    </li>
                   </ul>
                   )}
                   
               </section>
        </div>
    )
}
export default ToDoList