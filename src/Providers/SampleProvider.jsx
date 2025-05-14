import { createContext, useState } from "react";

export const SampleContext = createContext();

export const SampleProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    return <SampleContext.Provider value={{ counter, setCounter }}>
        {children}
    </SampleContext.Provider>
}