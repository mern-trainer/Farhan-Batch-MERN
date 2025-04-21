// Rendering the main application component

// React, ReactDOM

// React -> Create Elements
// React DOM -> Render Elements

//  -> Syncing the Virtual DOM with Real DOM -> Reconciliation

import ReactDOM from "react-dom/client"; 
import App from "./App" // Import the main application component

const container = document.getElementById("root"); // Get the root element from the HTML file

const root = ReactDOM.createRoot(container); // Create a root for the React application

root.render(<App></App>); // Render the "Hello World!" string into the root element