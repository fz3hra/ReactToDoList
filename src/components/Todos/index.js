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
                        text={todo.todos}
                        key={todo.id}
                        completedTask={todo.completedTask}
                    />
                )) : ""} 
            </ul>
        </div>
    )
}

export default ToDoList
