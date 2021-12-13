import React from 'react'
import { Header, State, Div } from './StatesElements'

// connecting with firebase
import database from '../../utils/firebase'
import { ref, set, get, child, query } from "firebase/database";


const States = ({input, setInput, todos, setTodos}) => {
    // link to state in parent 
    const inputHandler = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const submitHandler = (e, error) => {
        console.info("testing", error)
        e.preventDefault()
        // version 9
        const db = database;
            set(ref(db, 'text/' + input), {
                text: input,
                completed: false,
                id: Math.random() * 1000
            });
            console.log("check", db)
            setInput('')
    }
    // checking whats in the database
        

            // status handler - not yet made
        const statusHandler = (e) => {
            console.log("hello")
        }
    return (
        <>
            <Header>
                {/* todo title */}
                <p>#toDo - refresh page for update</p>
            </Header>
            {/* not functional for the time being */}
            <State onClick={statusHandler}>
                {/* <p className="all">All</p>
                <p className="active">Active</p>
                <p className="completed">Completed</p> */}
            </State>
                <hr className="line"/>
            <Div>
                <input 
                // to review later
                    value={input} // when we click on the button, the ui for input shouldd return back to no text
                    name="text"
                    type="text" 
                    placeholder="add details" 
                    className="search"
                    onChange={inputHandler}
                />
                <button 
                    className="button"
                    onClick={submitHandler}
                >Add</button>
            </Div>
        </>
    )
}

export default States
