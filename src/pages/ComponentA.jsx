import { useState } from "react";
import PopUp from "../components/PopUp";
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC";

// props -> pass data from parent to child

const list = [1, 2, 3, 4, 5];

const ComponentA = () => { // p

    const [open, setOpen] = useState(null)

    const handleClick = () => {
        console.log("Function invoked");
    }

    return <div>
        {open && <PopUp value={open} />}
        <button onClick={() => setOpen(open ? null : list[2])}>Show</button>
        Component A
        <ComponentB value="Hello World" handleClick={handleClick} /> {/* c */}
        <ComponentC handleClick={handleClick} />
    </div>    
}

export default ComponentA