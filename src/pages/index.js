import React, {useState, useEffect} from 'react'
import States from '../components/States'
import ToDoList from '../components/Todos'
// firebase
import database from '../utils/firebase'
import { ref, get, child } from "firebase/database";

const Main = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState()
    // const [status, setStatus] = useState("all")

    // from database
    useEffect(() => {
        const dbRef = ref(database);
            get(child(dbRef, `text/${input}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                const dos = snapshot.val()
                const todos = []
                for (let id in dos)
                {
                    todos.push({
                        id,
                        ...dos[id]
                    })
                }
                setTodos(todos)
                console.log("hundred", todos)
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
            console.log("from database", dbRef)
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
