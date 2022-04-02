import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

// firebase
import {database} from '../../utils/firebase'
import { ref, remove, child, update, getDatabase } from "firebase/database";
import {
    doc,
    updateDoc,
    deleteDoc
  } from "firebase/firestore";


const ToDoState = ({text, todos, setTodos, todo}) => {
    // event complete
    const toggleComplete = async () => {
        await updateDoc(doc(database, "todos", todo.id), { completedTask: !todo.completedTask});
      };
// delete event
      const handleDelete = async () => {
        await deleteDoc(doc(database, "todos", todo.id));
      };
    return ( 
        <div className="toDoState">
            <li className={`toDoLi ${todo.completedTask ? "completedTask" : ""}`}>{text}</li>
            <button className="toDoStateCompleted completedTask">
                <FontAwesomeIcon icon={faCheck} onClick={toggleComplete}/>
            </button>
            <button className="toDoStateTrash">
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/>
            </button>
        </div>
    )
}

export default ToDoState
