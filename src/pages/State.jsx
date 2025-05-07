// state -> Object that holds data that can change over time
// Hooks -> Functions that let you "hook into" React state and lifecycle features from function components
// Array Map -> Returns a new array with the results of calling a provided function on every element in this array

import { useState } from "react";
import NavBar from "../components/NavBar";

// useState() -> function that lets you add React state to function components

const State = () => {
    // let a = 10
    // const response = useState(10)
    const [counter, setCounter] = useState(10)
    const [user, setUser] = useState("John")
    const [passwords, setPasswords] = useState([])

    const handleClick = () => {
        setCounter(counter + 1)
    }

    const handleGeneratePassword = () => {
        const password = crypto.randomUUID()
        setPasswords([password, ...passwords])
    }

    const list = passwords.map(password => {
        // unique identifier to indentify which element is created, updated or deleted 
        return <div key={password} className="p-2 bg-secondary rounded text-light">{password}</div>
    })

    return <div>
        <NavBar />
        <h1>State Management In ReactJS</h1>
        <div>{counter}</div>
        <button onClick={handleClick}>Click</button>
        <div>{user}</div>
        <button onClick={() => setUser(user == "John" ? "Alex" : "John")}>
            set user to {user == "John" ? "Alex" : "John"}
        </button>
        Created Password: {passwords[0]}
        <button onClick={handleGeneratePassword}>Generate Random Password</button>
        <div className="d-flex flex-column gap-2 px-2">
            {list}
        </div>
    </div>
}

export default State
