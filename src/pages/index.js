import React, {useState, useEffect} from 'react'
import States from '../components/States'
import ToDoList from '../components/Todos'
// firebase
import {database} from '../utils/firebase'
import { collection, getDocs, onSnapshot, addDoc, serverTimestamp, orderBy, query, doc  } from "firebase/firestore"; 

const Main = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    // const [status, setStatus] = useState("all")

    // from database
    useEffect(() => {
        onSnapshot(query(collection(database, 'todos'), orderBy("timestamp")), (snapshot) => {
            setTodos(snapshot.docs.map((doc) => ({
                todos: doc.data().todos, id: doc.id, completedTask: doc.data().completedTask
            })))
            console.log("todos", (snapshot.docs.map((doc) => ({
                todos: doc.data().todos, id: doc.id, completedTask: doc.data().completedTask
            }))))
        })
    }, [])

    return (
        // import all components here
        <>
            <States 
                input={input} 
                todos={todos} 
                setTodos={setTodos} 
                setInput={setInput}
                // setStatus={setStatus}
            />
            <ToDoList
                todos={todos} 
                setTodos={setTodos}
            />
        </>
    )
}

export default Main
