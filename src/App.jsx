const App = () => {

    const handleClick = () => {
        console.log("Button clicked!");
    }

    const handleClickWithData = (data) => {
        console.log("Button clicked with data!", data);
    }

    const handleCreateRandomId = () => {
        const randomId = crypto.randomUUID();
        const randomDiv = document.getElementById("random")
        randomDiv.style.color = "red";
        randomDiv.style.fontSize = "20px";
        randomDiv.innerText = randomId;

    }

    return <div>
        <button onClick={handleClick}>Click Here</button>
        <button onClick={() => {
            handleClickWithData("hello World")
        }}>Click With Data</button>
        <div id="random"></div>
        <button onClick={handleCreateRandomId}>Generate Random Id</button>
    </div>
}

export default App;
// export

