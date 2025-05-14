// import ComponentA from "./pages/ComponentA";

import Router from "./Router";
import { SampleProvider } from "./Providers/SampleProvider";
import { TodoProvider } from "./Providers/TodoProvider";


// Routing ->

// Context -> Gobal state managment


const App = () => {
    
    return <TodoProvider>
        <SampleProvider>
            <Router />
        </SampleProvider>
    </TodoProvider>
}

export default App;

