const App = () => { // PascalCase for component names

    // jsx -> JavaScript XML

    const name = "John Doe"; // Variable to be used in the component
    const age = 30; // Variable to be used in the component

    const obj = {
        city: "New York",
        country: "USA"
    }

    return <div>
        <h1>Sample Heading</h1>
        <p>Age of {name} is {age}</p>
        <p>city: {obj.city} country:  {obj.country}</p>
        <img src="https://reactjs.org/logo-og.png" alt="Hi" />
    </div>  // Return a string to be rendered
}

export default App; // Export the component as default