import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([])
    const addTodo = (todo) => {
        console.log(todo);
        setTodoList([...todoList, { id: todoList.length + 1, title: "New Todo", completed: false }])
    }
    console.log(todoList);
    return <TodoContext.Provider value={{ todoList, setTodoList, addTodo }}>
        {children}
    </TodoContext.Provider>
}