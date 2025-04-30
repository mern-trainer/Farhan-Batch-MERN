// state -> Object that holds data that can change over time
// Hooks -> Functions that let you "hook into" React state and lifecycle features from function components

import { useState } from "react";

// useState() -> function that lets you add React state to function components

const State = () => {
    // let a = 10
    // const response = useState(10)
    const [counter, setCounter] = useState(10)
    const [user, setUser] = useState("John")

    const handleClick = () => {
        setCounter(counter + 1)
    }
    return <div>
        <h1>State Management In ReactJS</h1>
        <div>{counter}</div>
        <button onClick={handleClick}>Click</button>
        <div>{user}</div>
        <button onClick={() => setUser(user == "John" ? "Alex" : "John")}>
            set user to {user == "John" ? "Alex" : "John"}
            {/* confition ? true statement : false statement */}
        </button>
    </div>
}

export default State
