// import ComponentA from "./pages/ComponentA";

import { createContext, useState } from "react";
import Router from "./Router";


// Routing ->

// Context -> Gobal state managment

export const SampleContext = createContext()

const App = () => {
    const [counter, setCounter] = useState(0)
    return <SampleContext.Provider value={{counter, setCounter}}>
        <Router />
    </SampleContext.Provider>
}

export default App;

