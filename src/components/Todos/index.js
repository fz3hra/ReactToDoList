import React, { useEffect } from 'react'
import ToDoState from '../ToDoState';

const ToDoList = ({ todos, setTodos }) => {
    // reading from database
    return (
        <div>
            <ul className="toDoList">
                {todos ? todos.map((todo) => (
                    <ToDoState 
                        todo={todo}
                        todos={todos} 
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id}
                    />
                )) : ""} 
            </ul>
        </div>
    )
}

export default ToDoList
