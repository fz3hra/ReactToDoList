import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

// firebase
import database from '../../utils/firebase'
import { ref, remove, child, update } from "firebase/database";


const ToDoState = ({text, todos, setTodos, todo, input}) => {
    // event complete
    const completeHandler = ({completed, input}) => {
        // check complete when button pressed in firebase
        const dbRef = ref(database);
            update(child(dbRef, `text/${text}`), {
                completed: !completed
            })    
            console.log("update", dbRef)   
    }
    // event delete
    const deleteHandler = () => {
            const dbRef = ref(database);
            remove(child(dbRef, `text/${text}`))  
            console.log("toremove", dbRef)    
    }
    return ( 
        <div className="toDoState">
            <li className={`toDoLi ${todo.completed ? "completedTask" : ""}`}>{text}</li>
            <button className="toDoStateCompleted">
                <FontAwesomeIcon icon={faCheck} onClick={completeHandler}/>
            </button>
            <button className="toDoStateTrash">
                <FontAwesomeIcon icon={faTrash} onClick={deleteHandler}/>
            </button>
        </div>
    )
}

export default ToDoState
